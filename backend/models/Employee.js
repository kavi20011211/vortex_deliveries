const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name field cannot be empty"]
    },
    identification:{
        type: String,
        required: [true, "Identification field cannot be empty"]
    },
    address:{
        type: String,
        required: [true, "Address field cannot be empty"]
    },
    contact:{
        type: String,
        required: [true,"Contact field cannot be empty"]
    },
    designation:{
        type: String,
        required: [true,"Designation field cannot be empty"]
    },
    department:{
        type:String,
        required: [false]
    },
    started_date:{
        type: String,
        required: [true, "Started date field cannot be empty"]
    },
    username:{
        type: String,
        required: [true, "Username field cannot be empty"]
    },
    password:{
        type:String,
        required:[true, "Password field cannot be empty"]
    }
},
    {
        timestamps:true
    }
);

module.exports = mongoose.model("Employee",employeeSchema)