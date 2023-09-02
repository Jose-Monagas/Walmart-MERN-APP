const express = require('express');
const router = express.Router();
const productController = require('../../controllers/api/products');

//Get /api/products
router.get('/:subcategoryId', productController.index);

//Get /api/products/:id

router.get('/product/:productId', productController.show);

//Get
// router.get('/:id', productController.productRating);
module.exports = router;
