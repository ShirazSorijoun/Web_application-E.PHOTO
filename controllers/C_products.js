const S_products = require('../services/S_products');
//const products = require("../data/products");


const C_products = {

// returns all Products without the id of each product
getAll: async ()=> {
  return await S_products.getAll();
},

updateProduct: async (product)=> {
  return await S_products.updateProduct(product);
},

getProductByNameSearch: async (name)=> {
  if(name)
      return await S_products.getProductByNameSearch(name);
  return await S_products.getAll();
},
deleteProduct: async (_id)=> {
  return await S_products.deleteProduct(_id);
},


addProduct: async (name,image,brand,category,price,countInStock,rating,numReviews,description)=> {
  try{
      return await S_products.addProduct(name,image,brand,category,price,countInStock,rating,numReviews,description);
  }
  catch(e){
      console.log(e);
      res.json({error:e});
  }
},

 displayProducts : async()=>{
  try {
      const productList = await S_products.getAll();
      const productContainer = document.querySelector('[data-reflow-type="product-list"]');

      productList.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');

          productCard.innerHTML = `
              <h2>${product.name}</h2>
              <img src="${product.image}" alt="${product.name}">
              <p>${product.description}</p>
              <span>Price: $${product.price}</span>
              <button>Add to Cart</button>
          `;

          productContainer.appendChild(productCard);
      });
  } catch (error) {
      console.error(error);
  }
}


}

module.exports =   C_products ;







