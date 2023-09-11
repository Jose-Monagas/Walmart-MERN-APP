const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	image: { type: String },
	manufacturer: { type: String, required: true },
	description: { type: String, required: true },
	reviews: [{ type: String }]
});

module.exports = productSchema;
