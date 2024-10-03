const mongoose = require('mongoose')

const consumerSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name field cannot be empty"]
    },
    address:{
        type: String,
        required: [true,"Address field cannot be empty"]
    },
    contact:{
        type: Number,
        required:[true,"Contact number field cannot be empty"]
    },
    email:{
        type: String,
        required:[true,"Email field cannot be empty"]
    },
    password:{
        type: String,
        required:[true,"Password field cannot be empty"]
    }
    
},
    {
        timestamps:true
    });

module.exports = mongoose.model("Customer",consumerSchema);

