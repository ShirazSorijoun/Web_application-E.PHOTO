const path = require('../services/S_order');

const updateBasket = (req, res) => {
  const filePath = path.join(__dirname, '../views/views/cart.html'); // Correct the file path
  res.sendFile(filePath); // Send the file as the response
};

const getBaskets = async (req,res) => {
  const cart = await path.getBaskets();
  res.json(cart);
}

const getBasket = async (req,res) => {
  const Basket = await path.getBasketById(req.params.id);
  if (!Basket){
    return res.status(404).json({errors:['Basket not found']});
  }
  res.json(Basket);
}


const deleteBaskets = async (req,res) => {
  const cart = await path.deleteBaskets();
  if (!cart){
    return res.status(404).json({errors:['can not delete']});
  }
  res.json(cart)
}

const createBasket = async (req,res) => {
  const Basket = await path.createBasket();
  res.json(Basket)
}




const deleteBasket = async (req,res) => {
  const Basket = await path.deleteBasketById(req.params.id);
  if (!Basket){
    return res.status(404).json({errors:['Basket not found']});
  }
  res.json(cart);
}

const deleteProduct = async (req,res) => {
  const Basket = await path.getBasketById(req.params.id);
  if (!Basket){
    return res.status(404).json({errors:['Basket not found']});
  }
  else{
    const product = await path.deleteProduct(req.params.id);
    if (!product){
      return res.status(404).json({errors:['product not found']});
  }
  }
  res.json(Basket);
}

const addProduct = async (req,res) => {
  const Basket = await path.getBasketById(req.params.id);
  if (!Basket){
    return res.status(404).json({errors:['Basket not found']});
  }
  else{
    const product = await path.addProduct(req.params.id);
    if (!product){
      return res.status(404).json({errors:['product not found']});
  }
  }
  res.json(Basket);
}

module.exports = {
    getBaskets,
    getBasket,
    deleteBaskets,
    updateBasket,
    createBasket,
    deleteBasket,
    deleteProduct,
    addProduct   

}



