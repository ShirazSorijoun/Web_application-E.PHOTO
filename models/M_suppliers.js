const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuppliersDetails = new Schema({
    name: {
        type: String,
        required:true
    },
    contact_person:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true,
        street:{
            type: String,
            required:true
        },
        city:{
            type: String,
            required:true
        }, 
        zipcode:{
            type: int
        }
    },
    working_hours:
    {
        type: String
    }
});
const SuppliersUsers = new Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});
const Products = new Schema({
    serial_number:{
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    available_amount:{
        type: Number,
        required:true
    },
    order_quantity:
    {
        type: Number
    },
    animal_catagory:
    {
        type: String,
        required:true
    }
});
module.exports = mongoose.model('Products',Products)
module.exports = mongoose.model('SuppliersUsers',SuppliersUsers)
module.exports = mongoose.model('SuppliersDetails',SuppliersDetails)
