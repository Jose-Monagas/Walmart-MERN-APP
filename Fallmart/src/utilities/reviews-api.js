import sendRequest from './send-request';
import Review from '../../models/review';

const BASE_URL = 'api/reviews';

export function createReview(productId, reviewData) {
	return sendRequest(`${BASE_URL}/products/${productId}`, 'POST', reviewData);
}

export function deleteReview(reviewId) {
	return sendRequest(`${BASE_URL}/${reviewId}`, 'DELETE');
}

export function getReviewsByProduct(productId) {
	return sendRequest(`${BASE_URL}/products/${productId}`, 'GET');
}
