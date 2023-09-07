import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}

export function signIn(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function update(userData) {
	return sendRequest(`${BASE_URL}/update`, 'PUT', userData);
}
