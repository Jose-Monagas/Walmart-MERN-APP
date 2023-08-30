const User = require('../../models/user');
const coupons = require('../../src/utilities/coupons');
const discount = 0.3;
const Mongoose = require('mongoose');
module.exports = {
	signUp
};

async function signUp(req, res, next) {
	try {
		const user = await User.findOne({ _id: req.user._id });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		user.membershipType = 'Plus';
		user.membershipCode = user.phone;
		await user.save();
		coupons.push({ name: user.membershipCode, discount: discount });
		res.json(user);
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
