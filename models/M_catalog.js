const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Catagory = new Schema({
   id:{
       _id: ObjectId
   },
    title: {
        type: String,
        required:true
    },
    description:{
      type:String
    } 
});
const Reviews  = new Schema({
    id:{
        _id: ObjectId
    },
   
    product_id:{
        serial_number:{
            type: Number,
            required:true
    } 
    },
    customer_email:
    {
        type: String
       
    } ,
    rating: 
    {
        type: Number,
        required:true  
    },
    comment:{
        type:String
      },
   
      date:
      {
          type:Date,
          default: Date.now
      }

 }); 



 module.exports = mongoose.model('Reviews',Reviews)
 module.exports = mongoose.model('Catagory',Catagory)