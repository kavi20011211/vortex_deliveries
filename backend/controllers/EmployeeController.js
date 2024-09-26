const Employee = require('../models/Employee')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

//@DESC EMPLOYEE REGISTRATION FUNCTION
//@ROUTE POST
//@ACCESS PUBLIC

const employeeRegistrationFunc = asyncHandler(async(req,res)=>{
    const {name, identification, address, contact, designation, department, started_date, username, password} = req.body
    if(!name || !identification || !address || !contact || !designation || !started_date || !username || !password){
        res.status(400).json({message:"Required field must be filled before submit"});
    }

    //CHECK EMPLOYEE EXIST
    const user = await Employee.findOne({username});
    if(user){
        res.status(400).json({message:"Employee Already exist with the system!"})
        throw new Error("Employee Already exist with the system!");
    }

    //PASSWORD HASHING FUNCTION
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //CREATE EMPLOYEE FUNCTION
    const employee = await Employee.create({
        name,
        identification,
        address,
        contact,
        designation,
        department,
        started_date,
        username,
        password:hashedPassword
    })

    if (employee){
        return res.status(200)
        .json({
            _id:employee.id,
            name:employee.name,
            username:employee.username,
            token:generateToken(employee._id)
        })
    }else{
        return res.status(400).json({ message: "Something went wrong with the registration!" });
    }

})

//@DESC EMPLOYEE LOGIN FUNCTION
//@ROUTE POST
//@ACCESS PUBLIC

const employeeLoginFunction = asyncHandler(async(req,res)=>{
    const {username, password} = req.body

    const employee = await Employee.findOne({username})
    
    if (employee && (await bcrypt.compare(password,employee.password))) {
        if(employee.designation === 'Driver'){
            res.status(400)
            throw new Error("User cannot access to this system, please contact the support desk.")
        }else{
            res.status(200)
            .json({
              _id:employee.id,
              name:employee.name,
              username:employee.username,
              token:generateToken(employee._id)  
            })
        }
        
    }else{
        res.status(400)
        throw new Error ("Invalied User Credential Try Again Later.")
    }
})

//@DESC GET ALL EXISTING EMPLOYEES
//@ROUTE GET
//@ACCESS PRIVATE
 const getAllEmployees = asyncHandler(async(req,res)=>{
    const employees = await Employee.find();
    if(employees == null){
        res.status(400)
        .json({message:"No Existing Employees"})
    }else{
        res.status(200).json(employees)
    }
 })

//@DESC GET EMPLOYEE DATA
//@ROUTE GET
//@ACCESS PRIVATE

const getEmployee = asyncHandler(async(req,res)=>{
    const employee = await Employee.findById(req.params.id)
    if(employee){
        res.status(200).json(employee)
    }else{
        res.status(400).json({message:"No existing employee for this id"})
    }
    
})

//@DESC GET ALL DRIVERS
//@ROUTE GET
//@ACCESS PRIVATE

const getAllDrivers = asyncHandler(async(req,res)=>{
    const drivers = await Employee.find({designation:"Driver"});
    if(drivers == null){
        res.status(400)
        throw new Error("No existing drivers in the system")
    }else{
        res.status(200).json(drivers)
    }
})

//@DESC UPDATE EMPLOYEES
//@ROUTE PUT
//@ACCESS PRIVATE

const updateEmployee = asyncHandler(async(req,res)=>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        res.status(400)
        throw new Error ("Employee not found!")
    }

    if(!req.user){
        res.status(400)
        throw new Error ("Employee credentials are wrong!")
    }

    const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    })

    res.status(200).json({message:"Updated successfully"},updateEmployee)
})

//@DESC DELETE EMPLOYEES
//@ROUTE DELETE
//@ACCESS PRIVATE
const deleteEmployee = asyncHandler(async(req,res)=>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        res.status(400)
        throw new Error ("Employee not found!")
    }

    if(!req.user){
        res.status(400)
        throw new Error ("Employee credentials are wrong!")
    }

    await employee.deleteOne();
    res.status(200).json(req.params.id , {message:"Employee deleted successfully"})
})

module.exports = {
    employeeRegistrationFunc,
    employeeLoginFunction,
    getAllEmployees,
    getEmployee,
    getAllDrivers,
    updateEmployee,
    deleteEmployee
}

//GENERATE JWT TOKEN

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}