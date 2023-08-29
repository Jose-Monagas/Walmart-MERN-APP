import sendRequest from '../../src/utilities/send-request';
const BASE_URL = '/api/membership';

export function signup(userId) {
	return sendRequest(BASE_URL, 'POST', { userId });
}
