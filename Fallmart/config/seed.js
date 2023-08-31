require('dotenv').config();
require('./database');

const Department = require('../models/department');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
(async function () {
    await Department.deleteMany({});
	await SubCategory.deleteMany({})
	await Product.deleteMany({})
    const departments = await Department.create([
        { name: 'Groceries' },
        { name: 'Personal Care' },
        { name: 'Electronics' },
        { name: 'Home Furniture' },
        { name: 'Pets' },
        { name: 'Baby' },
        { name: 'Clothing' }
    ]);
	
	const subcategories = await SubCategory.create([
		{ name: 'Fruits', department: departments[0]._id },
		{ name: 'Hair Care', department: departments[1]._id },
		{ name: 'Mobile Phones', department: departments[2]._id },
		{ name: 'Living Room Furniture', department: departments[3]._id },
		{ name: 'Pet Food', department: departments[4]._id },
		{ name: 'Diapers', department: departments[5]._id },
		{ name: 'Casual Wear', department: departments[6]._id },
	  ]);

	  const Products = await Product.create([
		{
			name: "Apples",
			price: 2.99,
			image: "https://i.imgur.com/jaWvFz4.jpg",
			manufacturer: "Farm Fresh",
			department: departments[0]._id,
			description: "Fresh and delicious apples.",
			subcategory: subcategories[0]._id
}])

    process.exit();
})();

