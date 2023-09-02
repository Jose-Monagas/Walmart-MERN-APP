const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	name: { type: String },
	favoriteProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('WishList', wishlistSchema);
