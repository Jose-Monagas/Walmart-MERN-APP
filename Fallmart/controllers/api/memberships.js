const User = require('../../models/user');
const coupons = require('../../src/utilities/coupons');
const discount = 0.3;
const Mongoose = require('mongoose');
module.exports = {
	signUp,
	unsubscribe
};
async function signUp(req, res, next) {
	try {
		const user = await User.findOne({ _id: req.user._id });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		user.membershipType = 'plus';
		user.membershipCode = req.body.phone;
		await user.save();
		res.json(user);
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function unsubscribe(req, res, next) {
	try {
		const user = await User.findOne({ _id: req.user._id });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		user.membershipType = 'Regular';
		user.membershipCode = '';
		await user.save();

		const indexToRemove = coupons.findIndex(
			(coupon) => coupon.name === user.phone
		);
		coupons.splice(indexToRemove, 1);
		res.json(user);
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
