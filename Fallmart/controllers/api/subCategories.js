const SubCategory = require('../../models/subCategory');
const Product = require('../../models/product');
module.exports = {
	getSubCategoriesByDepartment,
	getProductsInSubCategory
};

async function getSubCategoriesByDepartment(req, res) {
	try {
		const departmentId = req.params.departmentId;
		const subCategories = await SubCategory.find({
			department: departmentId
		}).exec();
		res.status(200).json(subCategories);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function getProductsInSubCategory(req, res) {
	try {
		const subCategoryId = req.params.subCategoryId;
		const subCategory = await SubCategory.findById(subCategoryId);
		if (!subCategory) {
			return res.status(404).json({ message: 'SubCategory not found' });
		}
		const products = await Product.find({ subCategory: subCategoryId });
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
