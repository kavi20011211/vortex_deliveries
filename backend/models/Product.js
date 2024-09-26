const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product_name:{
        type: String,
        required: [true, "Product name field cannot be empty"]
    },
    customer:{
        type: mongoose.Schema.ObjectId,
        required:true,
        ref:'Customer'
    },
    reciever_name:{
        type: String,
        required:[true, "Reciever's name field cannot be empty"]
    },
    delivery_address:{
        type: String,
        required: [true, "Delivery address field cannot be empty"]
    },
    reciever_contact:{
        type:String,
        required:[true, "Reciever's contact field cannot be empty"]
    },
    product_price:{
        type: Number,
        required:[true, "Product price field cannot be empty"]
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.Model("Products",productSchema)