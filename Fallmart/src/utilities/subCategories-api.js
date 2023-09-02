import sendRequest from './send-request';

const BASE_URL = 'api/subcategories';

export function listAllSubcategoriesByDeptId(departmentId) {
	return sendRequest(`${BASE_URL}/department/${departmentId}`, 'GET');
}
