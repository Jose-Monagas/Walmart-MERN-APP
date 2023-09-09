const Wishlist = require('../../models/wishlist');
const Product = require('../../models/product');

module.exports = {
	viewFavoriteProducts,
	addItemToWishlist,
	removeProductFromWishlist,
	createWishlist
};
async function createWishlist(req, res) {
	try {
		const userId = req.user._id;
		const wishlistExist = await Wishlist.findOne({ userId });
		if (wishlistExist) {
			return res.status(200).json(wishlistExist);
		}
		const newWishList = new Wishlist({ userId });
		await newWishList.save();
		//console.log(newWishList);
		res.status(201).json(newWishList);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
async function viewFavoriteProducts(req, res) {
	try {
		const userId = req.user._id;
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
		const userId = req.user._id;
		const productId = req.params.productId;

		let wishlist = await Wishlist.findOne({ userId });
		if (!wishlist) {
			wishlist = new Wishlist({ userId });
		}
		if (!wishlist.favoriteProducts.includes(productId)) {
			wishlist.favoriteProducts.push(productId);
			await wishlist.save();
			res.status(201).json(wishlist);
		} else {
			res.status(400).jsoon({ message: 'Product already exists' });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function removeProductFromWishlist(req, res) {
	try {
		const userId = req.user._id;
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
