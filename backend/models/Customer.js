const mongoose = require('mongoose')

const consumerSchema = mongoose.Schema({
    name:{
        type: string,
        required: [true,"Name field cannot be empty"]
    },
    address:{
        type: string,
        required: [true,"Address field cannot be empty"]
    },
    contact:{
        type: Number,
        required:[true,"Contact number field cannot be empty"]
    },
    email:{
        type: string,
        required:[true,"Email field cannot be empty"]
    },
    password:{
        type: string,
        required:[true,"Password field cannot be empty"]
    }
    
},
    {
        timestamps:true
    });

module.exports = mongoose.model("Customer",consumerSchema);

