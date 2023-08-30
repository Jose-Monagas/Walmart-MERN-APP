const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { use } = require('browser-sync');

const checkToken = (req, res) => {
	console.log('req.user', req.user);
	res.json(req.exp);
};

const dataController = {
	async create(req, res, next) {
		try {
			const user = await User.create(req.body);
			console.log(req.body);
			// token will be a string
			const token = createJWT(user);
			// send back the token as a string
			// which we need to account for
			// in the client
			res.locals.data.user = user;
			res.locals.data.token = token;
			next();
		} catch (e) {
			console.log('you got a database problem');
			res.status(400).json(e);
		}
	},

	async login(req, res, next) {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) throw new Error();
			const match = await bcrypt.compare(req.body.password, user.password);
			if (!match) throw new Error();
			res.locals.data.user = user;
			res.locals.data.token = createJWT(user);
			next();
		} catch {
			res.status(400).json('Bad Credentials');
		}
	},
	//UPDATE USER
	async updateUser(req, res, next) {
		try {
			const authUser = req.user._id;
			const newEmail = req.body.email;
			console.log('authUserEmail:', req.user);
			console.log('new', newEmail);
			//authUser.email = newEmail;

			const user = await User.findOne({ _id: authUser });
			console.log(user);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			if (newEmail !== authUser.email) {
				const emailTaken = await User.exists({ email: newEmail });
				if (emailTaken) {
					return res.status(400).json({ message: 'Email already in use' });
				}
			}

			const updates = Object.keys(req.body);
			//console.log(updates);
			updates.forEach((update) => (user[update] = req.body[update]));

			// Save the updated user
			await user.save();
			// const token = createJWT(user);
			res.json(user);
			next();
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	}
};

const apiController = {
	auth(req, res) {
		res.json(res.locals.data.token);
	}
};

module.exports = {
	checkToken,
	dataController,
	apiController
};

/* -- Helper Functions -- */

function createJWT(user) {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
