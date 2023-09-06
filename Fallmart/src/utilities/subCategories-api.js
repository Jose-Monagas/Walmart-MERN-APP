import sendRequest from './send-request';

const BASE_URL = 'api/subcategories';

export function listAllSubcategoriesByDeptId(departmentId) {
	// TODO: broken, remove deparment/
	return sendRequest(`${BASE_URL}/department/${departmentId}`, 'GET');
}

export function listAllSubcategories() {
	console.log('list all subcategories');
	return sendRequest(BASE_URL, 'GET');
}
