import sendRequest from './send-request';
import Product from '../../models/product';

const BASE_URL = '/api/products';

export function getProductsBySubCategoryId(subcategoryId) {
	return sendRequest(`${BASE_URL}/${subcategoryId}`);
}

export function getProductById(productId) {
	return sendRequest(`${BASE_URL}/product/${productId}`);
}

module.exports = router;
