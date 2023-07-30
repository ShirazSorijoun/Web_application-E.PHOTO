const express = require('express');
const router = express.Router();
const Basket  = require('../controllers/C_shopping_cart'); // Correct the import statement

router.route('/')
    .get(Basket.getBaskets)
    .delete(Basket.deleteBaskets)
    .post(Basket.createBasket)
    
    
router.route('/:id')
    .get(Basket.getBasket)
    .delete(Basket.deleteBasket)
    .delete(Basket.deleteProduct)
    .post(Basket.addProduct)
    .put(Basket.updateBasket)
    
module.exports = router;












