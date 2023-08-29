const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../../controllers/api/wishlists');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//PUT /api/wishlists/:wishlistId/add/:productId
router.put(
	'/:wishlistId/add/:productId',
	ensureLoggedIn,
	wishlistCtrl.addProductToWishlist
);

//Delete /api/wishlists/:wishlistId/remove/:productId
router.delete(
	'/:wishlistId/remove/:productId',
	ensureLoggedIn,
	wishlistCtrl.removeProductFromWishlist
);

//GET /api/wishlists/favorites/
router.get('/favorites', ensureLoggedIn, wishlistCtrl.viewFavoriteProducts);

module.exports = router;
