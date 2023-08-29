const Wishlist = require('../../models/wishlist');
const Product = require('../../../models/product');

async function viewFavoriteProducts(req, res) {
	try {
		const userId = req.locals.user._id;
		const wishlist = await Wishlist.findOne({ userId }).populate(
			'favoriteProducts'
		);

		res.status(200).json(wishlist.favoriteProducts);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function addItemToWishlist(req, res) {
	try {
		const userId = req.locals.user._id;
		const productId = req.params.productId;
		let wishlist = await Wishlist.findOne({ userId });
		if (!wishlist) {
			wishlist = new Wishlist({ userId });
			await wishlist.save();
			res.status(201).json(wishlist);
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function removeProductFromWishlist(req, res) {
	try {
		const userId = req.locals.user._id;
		const productId = req.params.productId;

		const wishlist = await Wishlist.findOneAndUpdate(
			{ userId },
			{ $pull: { favoriteProducts: productId } }
		);
		res.status(200).json(wishlist);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
