const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
	name: { type: String, required: true },
	products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
	department: { type: Schema.Types.ObjectId, ref: 'department', required: true }
});

module.exports = mongoose.model('subcategory', subcategorySchema);
