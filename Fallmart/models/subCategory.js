const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
	name: { type: String, required: true },
	products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
	department: type.Schema.Types.ObjectId
});

module.exports = mongoose.model('subcategory', subcategorySchema);
