import sendRequest from './send-request';

const BASE_URL = '/api/departments';

export function listDept() {
	return sendRequest(`${BASE_URL}/showdepts`, 'GET');
}
