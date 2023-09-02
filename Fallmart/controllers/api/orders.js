const Order = require('../../models/order');
const User = require('../../models/user');
const coupons = require('../../src/utilities/coupons');
module.exports = {
	cart,
	addToCart,
	removeFromCart,
	setItemQtyInCart,
	checkout,
	history,
	applyCoupon
};

// A cart is the unpaid order for a user//
//if no req.user then a guest will be created
async function cart(req, res) {
	try {
		let userId = req.user ? req.user._id : 'guest';
		const cart = await Order.getCart(userId);
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Add an item to the cart
async function addToCart(req, res) {
	try {
		let userId = req.user ? req.user._id : 'guest';
		const cart = await Order.getCart(userId);
		await cart.addItemToCart(req.params.id);
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Remove an item from the cart
async function removeFromCart(req, res) {
	try {
		let userId = req.user ? req.user._id : 'guest';
		const cart = await Order.getCart(userId);
		await cart.removeEntireItem(req.params.id);
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
	try {
		let userId = req.user ? req.user._id : 'guest';
		const cart = await Order.getCart(userId);
		await cart.setItemQty(req.body.itemId, req.body.newQty);
		res.status(200).json(cart);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
	try {
		let userId = req.user ? req.user._id : 'guest';
		const cart = await Order.getCart(userId);
		if (cart) {
			cart.isPaid = true;
			await cart.save();
			res.status(200).json(cart);
		} else {
			res.status(404).json({ message: 'Cart not found' });
		}
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

// Return the logged in user's paid order history
async function history(req, res) {
	// Sort most recent orders first
	try {
		const orders = await Order.find({ user: req.user._id, isPaid: true })
			.sort('-updatedAt')
			.exec();
		res.status(200).json(orders);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function applyCoupon(req, res) {
	try {
		const cart = await Order.getCart(req.user._id);
		const user = await User({ _id: req.user._id });
		const coupon = coupons.find(
			(coupon) => coupon.name === user.membershipCode
		);

		if (!coupon) {
			return res.status(400).json({ message: 'Coupon not found' });
		}
		cart.hasCoupon = true;
		cart.couponPercentage = coupon.discount;
		await cart.save();
		res.json(cart);
	} catch (error) {
		res.status(400).json({ msg: e.message });
	}
}
