const Customer = require('../models/Customer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

//@DESC CUSTOMER REGISTRATION FUNCTION
//@ROUTE POST
//@ACCESS PUBLIC

const customerRegisterFunc = asyncHandler(async(req,res)=>{
    const {name, address, contact, email, password} = req.body
    if(!name || !address || !contact || !email || !password){
        res.status(400).json({message:"Required fields must be filled"})
    }

    // CHECK CUSTOMER EXIST
    const user = await Customer.findOne({email})
    if(user){
        res.status(400).json({message:"User already exist"})
        throw new Error("User already exists")
    }

    //PASSWORD HASHING FUNCTION
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //CREATE CUSTOMER
    const customer = await Customer.create({
        name,
        address,
        contact,
        email,
        password: hashedPassword
    })

    if(customer){
        res.status(200)
        .json({
            _id:customer.id,
            name:customer.name,
            email:customer.email,
            token:generateToken(customer.id)
        })
    }else{
        res.status(400)
        .json({message:"Something went wrong with registration, Try again"})
    }
})

//@DESC CUSTOMER REGISTRATION FUNCTION
//@ROUTE POST
//@ACCESS PUBLIC

const customerLoginFunc = asyncHandler(async(req,res)=>{
    const {email, password} = req.body
    
    // CHECK USER EXISTS   
    const user = Customer.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200)
        .json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user.id)
        })
    }else{
        res.status(400)
        .json({message:"Something wrong with the credentials. Try again"})
    }
})

//@DESC GET CUSTOMER DATA
//@ROUTE GET
//@ACCESS PRIVATE

const getCustomer = asyncHandler(async(req,res) =>{

    res.status(200).json(req.user)
})

//@DESC UPDATE CUSTOMER
//@ROUTE PUT
//@ACCESS PRIVATE

const updateCustomer = asyncHandler(async(req,res)=>{
    const customer = await Customer.findById(req.params.id)
    if(!customer){
        res.status(400)
        throw new Error("User does not exist")
    }

    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    })
})

//@DESC DELETE CUSTOMER
//@ROUTE DELETE
//@ACCESS PRIVATE   
const deleteCustomer = asyncHandler(async(req,res)=>{
    const customer = await Customer.findById(req.params.id)
    if(!customer){
        res.status(400)
        throw new Error("User does not exist")
    }

    if(!req.user){
        res.status(400)
        throw new Error ("User credentials are wrong")
    }

    await customer.deleteOne()
    res.status(200).json({message:"User deleted successfully"}, req.params.id)
})

module.exports = {
    customerRegisterFunc,
    customerLoginFunc,
    updateCustomer,
    getCustomer,
    deleteCustomer
}

//GENERATE JWT TOKEN

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}