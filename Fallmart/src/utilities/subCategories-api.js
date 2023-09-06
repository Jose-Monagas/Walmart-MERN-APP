import sendRequest from './send-request';

const BASE_URL = 'api/subcategories';

export function listAllSubcategoriesByDeptId(departmentId) {
	// TODO: broken, remove deparment/
	return sendRequest(`${BASE_URL}/department/${departmentId}`, 'GET');
}

export function listAllSubcategories() {
	return sendRequest(BASE_URL, 'GET');
}
