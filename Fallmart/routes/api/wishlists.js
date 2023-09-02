const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/api/wishlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET /api/wishlists/favorites/
router.get('/favorites', ensureLoggedIn, wishlistCtrl.viewFavoriteProducts);

//PUT /api/wishlists/:wishlistId/add/:productId
router.put('/add/:productId', ensureLoggedIn, wishlistCtrl.addItemToWishlist);

//Delete /api/wishlists/:wishlistId/remove/:productId
router.delete(
	'/remove/:productId',
	ensureLoggedIn,
	wishlistCtrl.removeProductFromWishlist
);

module.exports = router;
