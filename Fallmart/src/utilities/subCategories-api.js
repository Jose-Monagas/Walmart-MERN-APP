import sendRequest from './send-request';

const BASE_URL = 'api/subcategories';

export function listAllSubcategoriesByDeptId(departmentId) {
	// TODO: broken, remove deparment/:
	//got it
	return sendRequest(`${BASE_URL}/${departmentId}`, 'GET');
}

export function listAllSubcategories() {
	return sendRequest(BASE_URL, 'GET');
}
