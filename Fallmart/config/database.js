const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on('connected', () => {
	console.log(`connected to ${db.name} at ${db.host}`);
});
