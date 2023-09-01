import sendRequest from './send-request';

const BASE_URL = 'api/subcategories';

export function listAllSubcategories(subCategoryList) {
	return sendRequest(
		`${BASE_URL}/department/:departmentId`,
		'GET',
		subCategoryList
	);
}

export function listProductsInSubCategory(subCategoryProducts) {
	return sendRequest(
		`${BASE_URL}/products/:subCategoryId`,
		'GET',
		subCategoryProducts
	);
}
