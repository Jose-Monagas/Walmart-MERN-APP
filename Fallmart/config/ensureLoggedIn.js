const ensureLoggedIn = (req, res, next) => {
	console.log(req.user)
	if (!req.user) {
		return res
			.status(401)
			.json({ message: 'You must be logged in to access this resource.' });
	}

	// If user is logged in, continue to the next middleware or route handler
	next();
};

module.exports = ensureLoggedIn;
