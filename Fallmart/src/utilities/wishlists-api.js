import sendRequest from './send-request';

const BASE_URL = '/api/wishlists';

export function addProductToWishlist(wishlistId, productId) {
	return sendRequest(`${BASE_URL}/${wishlistId}/add/${productId}`, 'PUT');
}

export function removeProductFromWishlist(wishlistId, productId) {
	return sendRequest(`${BASE_URL}/${wishlistId}/remove/${productId}`, 'DELETE');
}

export function viewFavoriteProducts() {
	return sendRequest(`${BASE_URL}/favorites`);
}

export function createWishlist() {
	return sendRequest(`${BASE_URL}/create`, 'POST');
}
