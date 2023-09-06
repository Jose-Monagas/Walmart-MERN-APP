const express = require('express');
const router = express.Router();
const subCategoriesCtrl = require('../../controllers/api/subCategories');

// GET /api/subcategories/
router.get('/', subCategoriesCtrl.index);

// GET /api/subcategories/department/:departmentId
router.get('/:departmentId', subCategoriesCtrl.getSubCategoriesByDepartment);

module.exports = router;
