const Product = require('../models/M_product')

const S_Product = {

    addBranch: async (name,image,brand,category,price,countInStock,rating,numReviews,description)=> {

        const product = new Product({
            name,
            image,
            brand,
            category,
            price,
            countInStock,
            rating,
            numReviews,
            description,
        });
        return await branch.save()
    },

    getProductByNameSearch: async (name) => {
        return await Product.find({ name: {$regex: '^.*' + name + '.*$', $options: 'i'} });
    },

    updateProduct: async (location)=> {
        return await Product.findOneAndUpdate({ _id: product._id }, product);
    },

    deleteProduct: async (_id)=> {
        return await Product.findOneAndDelete({ _id });
    },
    
    getAll: async ()=> {
        return await Product.find({})
    },


    
}

module.exports = S_Product;