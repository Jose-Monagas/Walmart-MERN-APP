require('dotenv').config();
require('./database');

const Department = require('../models/department');
const subCategory = require('../models/subCategory');
const Product = require('../models/product');

(async function () {
	await Department.deleteMany({});
	const depts = await Department.create([
		{ name: 'Groceries', sortOrder: 10 }, //0
		{ name: 'Personal Care', sortOrder: 20 }, //1
		{ name: 'Electronics', sortOrder: 30 }, //2
		{ name: 'Home & Furniture', sortOrder: 40 }, //3
		{ name: 'Pets', sortOrder: 50 }, //4
		{ name: 'Baby', sortOrder: 60 }, //5
		{ name: 'Clothing', sortOrder: 70 } //6
	]);

	await Product.deleteMany({});
	const products = await Product.create([
		{
			name: 'Apples',
			price: 2.99,
			image: 'https://i.imgur.com/jaWvFz4.jpg',
			manufacturer: 'Farm Fresh',
			department: depts.filter((dept) => dept.name === 'Groceries')[0]._id,
			description: 'Fresh and delicious apples.',
			review: '',
			subcategory: null
		},
		{
			name: 'Shampoo',
			price: 5.49,
			image: 'https://i.imgur.com/J6r4mEn.jpg',
			manufacturer: 'CareClean',
			department: depts.filter((dept) => dept.name === 'Personal Care')[0]._id,
			description: 'Gentle and nourishing shampoo.',
			review: '',
			subcategory: null
		}
	]);

	process.exit();
})();
