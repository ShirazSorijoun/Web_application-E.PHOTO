const  express = require('express');
const  router = express.Router();
const  Products  = require('../controllers/C_products'); // Correct the import statement




router.get('/api/products', async (req, res, next) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      next(error);
    }
  });

router.route('/')
    .get(Products.getProducts)
    
    
 
router.route('/:id')
.get(Products.getProduct)


module.exports = router;
    









