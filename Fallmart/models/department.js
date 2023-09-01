const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
	name: { type: String, required: true },
	subcategories: [{ type: Schema.Types.ObjectId, ref: 'SubCategory' }]
});

module.exports = mongoose.model('Department', departmentSchema);
