const User = require('../../models/user');
const Mongoose = require('mongoose');
module.exports = {
	signUp
};

// A cart is the unpaid order for a user
async function signUp(req, res, next) {
	try {
		if (!res.locals.data.user) {
			return res.status(400).json({ message: 'Please log in' });
		}
		const user = await User.findOne({ _id: req.params.id });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		user.membershipType = 'Plus';
		user.membershipCode = ObjectId();
		await user.save();
		res.json(user);
		next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
