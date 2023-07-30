//js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const Orders = require('./routes/R_order');
const newLocal = require('custom-env')  
newLocal.env(process.env.NODE_ENV,'./config');

// Mongo DB conncetion
const database = process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/proddb";
mongoose.connect(database,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log("mongo connected"))
    .catch(err => console.log(err));


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


//Routes
app.use('/cart', Orders);
const PORT = process.env.PORT ||  4111;

//module.exports = app;

// Start the server
app.listen(PORT, console.log("Server do start for port: " + PORT))

// Define the Product Model
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    category: {type:String, required: true},
    numOfPurchases: {type: Number, required: false },
    uploadedBy: {type: String,required: false},
    ID:{type: Number, required: true }
  });
  
  const Product = mongoose.model('Product', productSchema);

  // Controller: Add product to the database
const addProductController = async (req, res) => {
    try {
      const { name, price, description, category,numOfPurchases,uploadedBy, ID} = req.body;
  
      const newProduct = new Product({
        name,
        price,
        description,
        category,
        numOfPurchases,
        uploadedBy,
        ID,
      });
  
      await newProduct.save();
  
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add product' });
    }
  };

  // Routes
app.post('/products', addProductController);


