const cart = require('../models/M_product')


const getProductById = async(id) =>{
    return await cart.findById(id)
}

const getProducts = async() =>{
    return await cart.find({})
}


module.exports = {
    getProductById,
    getProducts
}