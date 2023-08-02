const  express = require('express');
const  router = express.Router();
const  Products  = require('../controllers/C_products'); // Correct the import statement

router.route('/')
    .get(Products.getProducts)
    
    
 
router.route('/:id')
.get(Products.getProduct)


module.exports = router;
    









