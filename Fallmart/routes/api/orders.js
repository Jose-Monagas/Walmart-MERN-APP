const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history
router.get('/history', ensureLoggedIn, ordersCtrl.history);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
// PUT /api/orders/cart/coupon
router.put('/cart/coupon', ensureLoggedIn, ordersCtrl.applyCoupon);
// DELETE /api.orders/cart/remove
router.delete('/cart/remove/:id', ordersCtrl.removeFromCart);

module.exports = router;
