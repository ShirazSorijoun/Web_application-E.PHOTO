const path = require('../services/S_products');
const products = require("../data/products");

 const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.render("products", { products });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req,res) => {
    const prods = await path.getProducts();
    res.json(prods);
  }
  
  const getProduct = async (req,res) => {
    const prod = await path.getProductById(req.params.id);
    if (!prod){
      return res.status(404).json({errors:['Basket not found']});
    }
    res.json(prod);
  }


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



  module.exports = {
    getProducts,
    getProduct,
    addProductController,
    getAllProducts

}
