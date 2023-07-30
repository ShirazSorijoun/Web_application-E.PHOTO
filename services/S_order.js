const cart = require('../models/M_shopping_basket')

const deleteProduct= async(id) =>{
    return await cart.products.deleteOne(id);
}

const addProduct= async(id) =>{
    return await cart.products.apply(id);
}

const getBasketById = async(id) =>{
    return await cart.findById(id)
}

const createBasket = async () => {
    const Basket = new ShoppingBasketSchema;
    return await Basket.save()
}

const getBaskets = async() =>{
    return await cart.find({})
}

const deleteBasketById = async (id) => {
    const Basket = await getArticleById(id);
    if (!Basket)
        return null;
    await Basket.deleteOne();
    return Basket;
}

const deleteBaskets =  async (id) => {
    cart.find({}).deleteMany();
}

const updateBasket = async (id) => {
    cart.getBasket(id);
}

module.exports = { 
    getBasketById,
    createBasket,
    getBaskets,
    deleteBaskets,
    deleteBasketById,
    addProduct,
    deleteProduct,
    updateBasket
}


