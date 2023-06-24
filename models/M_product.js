const mongoose = require ('mongoose');

mongoose.connect('mongodb://<db_username>:<db_password>@<db_host>/<db_name>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});


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
  }
});

// Create the User model
const Product = mongoose.model('Product', productSchema);
// Export the User model
module.exports = Product;
