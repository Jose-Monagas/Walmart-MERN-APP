import sendRequest from './send-request';

const BASE_URL = '/api/products';

export function getProductsBySubCategoryId(subcategoryId) {
	return sendRequest(`${BASE_URL}/${subcategoryId}`);
}

export function getProductById(productId) {
	return sendRequest(`${BASE_URL}/product/${productId}`);
}

export function getAllProducts() {
	return sendRequest(`${BASE_URL}/`);
}
