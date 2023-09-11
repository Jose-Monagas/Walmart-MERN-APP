const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');
const User = require('./user');
const cartItemSchema = new Schema(
	{
		qty: { type: Number, default: 1 },
		item: productSchema
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

cartItemSchema.virtual('extPrice').get(function () {
	// 'this' is bound to the lineItem subdoc
	return this.qty * this.item.price;
});

const orderSchema = new Schema(
	{
		user: Schema.Types.Mixed,
		cartItems: [cartItemSchema],
		isPaid: { type: Boolean, default: false },
		hasCoupon: { type: Boolean, default: false },
		couponPercentage: { type: Number, default: 0 }
	},
	{
		timestamps: true,
		toJSON: { virtuals: true }
	}
);

orderSchema.virtual('orderTotal').get(function () {
	let total = this.cartItems.reduce((total, item) => total + item.extPrice, 0);
	if (this.hasCoupon) {
		return total - total * this.couponPercentage;
	}
	return total;
});

orderSchema.virtual('totalQty').get(function () {
	return this.cartItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function () {
	return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
	// 'this' is the Order model
	//console.log('Welcome', userId);
	return this.findOneAndUpdate(
		// query
		{ user: userId, isPaid: false },
		// update
		{ user: userId },
		// upsert option will create the doc if
		// it doesn't exist
		{ upsert: true, new: true }
	);
};

orderSchema.methods.addItemToCart = async function (itemId) {
	const cart = this;
	// Check if item already in cart
	const cartItem = cart.cartItems.find((cartItem) =>
		cartItem.item._id.equals(itemId)
	);
	if (cartItem) {
		cartItem.qty += 1;
	} else {
		const item = await mongoose.model('Product').findById(itemId);
		cart.cartItems.push({ item });
	}
	return cart.save();
};

// Instance method to set an item's qty in the cart (will add item if does not exist)
orderSchema.methods.setItemQty = function (itemId, newQty) {
	// this keyword is bound to the cart (order doc)
	const cart = this;
	// Find the line item in the cart for the menu item
	const cartItem = cart.cartItems.find((cartItem) =>
		cartItem.item._id.equals(itemId)
	);
	if (cartItem && newQty <= 0) {
		// Calling remove, removes itself from the cart.lineItems array
		cartItem.deleteOne();
	} else if (cartItem) {
		// Set the new qty - positive value is assured thanks to prev if
		cartItem.qty = newQty;
	}
	// return the save() method's promise
	return cart.save();
};

orderSchema.methods.removeEntireItem = function (itemId, newQty) {
	// this keyword is bound to the cart (order doc)
	const cart = this;
	// Find the line item in the cart for the menu item
	const cartItem = cart.cartItems.find((cartItem) =>
		cartItem.item._id.equals(itemId)
	);
	// Calling remove, removes itself from the cart.lineItems array
	cartItem.deleteOne();

	return cart.save();
};
module.exports = mongoose.model('Order', orderSchema);
