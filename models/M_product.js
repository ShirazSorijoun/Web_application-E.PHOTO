const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    name: String,
    required: true 
  },
  price:{
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  numOfPurchases: {
    type: Number,
    required: false
  },
  uploadedBy: {
    type: String,
    required: false
  },
  ID:{
    type: Number,
    required: true
  }
});
// Create the Photo model
const Product = mongoose.model('Product', productSchema);
// Export the Photo model
module.exports = Product;
