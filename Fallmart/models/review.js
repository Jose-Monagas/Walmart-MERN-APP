const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	name: { type: String, default: 'Anonymous' },
	rating: { type: Number, min: 1, max: 5, default: 0 },
	comment: String,
	product: { type: Schema.Types.ObjectId, ref: 'Product' },
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Review', reviewSchema);
