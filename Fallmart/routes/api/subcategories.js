const express = require('express');
const router = express.Router();
const subCategoriesCtrl = require('../../controllers/api/subCategories');

//GET /api/subcategories/department/:departmentId,
router.get(
	'/department/:departmentId',
	subCategoriesCtrl.getSubCategoriesByDepartment
);

//GET /api/subcategories/products/:subCategoryId

router.get(
	'/products/:subCategoryId',
	subCategoriesCtrl.getProductsInSubCategory
);

module.exports = router;
