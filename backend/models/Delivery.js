const mongoose = require('mongoose')

const DeliverySchema = mongoose.Schema({
    product:{
        name: mongoose.Schema.ObjectId,
        required: [true, "Product name field cannot be empty"],
        ref: 'Product'
    },
    driver_name:{
        name: string,
        required: [true, "Driver's name field cannot be empty"],
    },
    sender:{
        name: string,
        required: [true, "Sender's name field cannot be empty"],
    },
    reciever:{
        name: string,
        required: [true, "Reciever's name field cannot be empty"],
    },
    address:{
        name: string,
        required: [true, "Reciever's address field cannot be empty"],
    },
    contact:{
        name: string,
        required: [true, "Reciever's contact field cannot be empty"],
    },
    price:{
        name: Number,
        required: [true, "Product price field cannot be empty"],
    },
    status:{
        type: Boolean,
        required:[true,"Product current status field cannot be empty"]
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Delivery",DeliverySchema)