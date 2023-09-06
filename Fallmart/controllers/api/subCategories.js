const SubCategory = require('../../models/subCategory');
const Product = require('../../models/product');
const Department = require('../../models/department');
module.exports = {
	getSubCategoriesByDepartment,
	index
	//getProductsInSubCategory
};
//find department and send back array of subcatergories that
//a department hold.
async function getSubCategoriesByDepartment(req, res) {
	try {
		const departmentId = req.params.departmentId;
		const department = await Department.findById(departmentId)
			.populate('subcategories', 'name')
			.exec();
		if (!department) {
			return res.status(404).json({ message: 'Department not found' });
		}
		const subCategoriesData = department.subcategories.map((subcategory) => ({
			_id: subcategory._id,
			name: subcategory.name
		}));
		res.status(200).json(subCategoriesData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function index(req, res) {
	try {
		const subcategories = await SubCategory.find({}).exec();
		if (!subcategories) {
			return res.status(404).json({ message: 'Subcategories not found' });
		}
		res.status(200).json(subcategories);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

// async function getProductsInSubCategory(req, res) {
// 	try {
// 		const subCategoryId = req.params.subCategoryId;
// 		const subCategory = await SubCategory.findById(subCategoryId);
// 		if (!subCategory) {
// 			return res.status(404).json({ message: 'SubCategory not found' });
// 		}
// 		const products = await Product.find({ subCategory: subCategoryId });
// 		res.status(200).json(products);
// 	} catch (error) {
// 		res.status(400).json({ message: error.message });
// 	}
// }
