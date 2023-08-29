const mongoose = require('mongoose');

require('./department');

const productSchema = require('./productSchema');

module.exports = mongoose.model('product', productSchema);
