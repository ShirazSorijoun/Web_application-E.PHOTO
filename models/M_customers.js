const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersDetails = new Schema({
    name: {
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
    favorite_items:
    {
        serial_number:{
            type: int,
            required:true
        },
        name:{
            type: String,
            required:true
        }
    },
    history_orders :{
        serial_number:{
            type: int,
            required:true
        },
        date:{
          type:Date,
          default: Date.now
        }
    }
});

const CustomerUsers = new Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
 
});

const ShoppingCart = new Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    items: [
        {
        serial_number: {
           type: Number,
           required:true
        },
          quantity:{
            type: Number,
            required:true
         },
          price: {
            type: Number,
            required:true
         }
        }],

    total_price:{
       type: Number
    },
    date_order:
    {
        type:Date,
        default: Date.now
    }
});
module.exports = mongoose.model('ShoppingCart',ShoppingCart)
module.exports = mongoose.model('CustomerUsers',CustomerUsers)
module.exports = mongoose.model('CustomersDetails',CustomersDetails)
