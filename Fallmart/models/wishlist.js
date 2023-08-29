const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	name: String,
	favoriteProducts: [{ type: Schema.Types.ObjectId, ref: 'product' }]
});

module.exports = mongoose.model('wishlist', wishlistSchema);
