require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
// const favicon = require('serve-favicon')

require('./config/database');

app.use(require('./config/checkToken'));

/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development') {
	app.use(express.static('public'));
}

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});

app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false
	})
);

app.use('/api/users', require('./routes/api/users'));
app.use('/api/departments', require('./routes/api/department'));
app.use('/api/subcategories', require('./routes/api/subcategories'));
app.use('/api/products', require('./routes/api/products'));

app.use('/api/orders', require('./routes/api/orders'));

app.use('/api/reviews', require('./routes/api/reviews'));

app.use('/api/membership', require('./routes/api/memberships'));
app.use('/api/wishlists', require('./routes/api/wishlists'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
});

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});
