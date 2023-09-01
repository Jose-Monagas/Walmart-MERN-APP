const mongoose = require('mongoose');

require('./department');
require('./subCategory');
const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);
