require('dotenv').config();
require('./database');

const Department = require('../models/department');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
(async function () {
	await Department.deleteMany({});
	await SubCategory.deleteMany({});
	await Product.deleteMany({});
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
		{ name: 'Fruits' },
		{ name: 'Hair Care' },
		{ name: 'Mobile Phones' },
		{ name: 'Living Room Furniture' },
		{ name: 'Pet Food' },
		{ name: 'Diapers' },
		{ name: 'Casual Wear' },
		{ name: 'Beverages' },
		{ name: 'Oral Care' },
		{ name: 'Computers' },
		{ name: 'Tablets' },
		{ name: 'Wipes' },
		{ name: 'Formal Wear' },
		{ name: 'Office Furniture' },
		{ name: 'Antiperspirants' },
		{ name: 'Speakers' }
	]);

	const Products = await Product.create([
		{
			name: 'Apples',
			price: 2.99,
			image: 'https://i.imgur.com/jaWvFz4.jpg',
			manufacturer: 'Farm Fresh',
			description: 'Fresh and delicious apples.'
		},
		{
			name: 'Shampoo',
			price: 5.49,
			image: 'https://i.imgur.com/J6r4mEn.jpg',
			manufacturer: 'CareClean',
			description: 'Gentle and nourishing shampoo.'
		},
		{
			name: 'Smartphone',
			price: 399.99,
			image: 'https://i.imgur.com/K3aI2Pe.jpg',
			manufacturer: 'Techtronics',
			description: 'High-end smartphone with advanced features.'
		},
		{
			name: 'Sofa',
			price: 299.0,
			image: 'https://i.imgur.com/OgkFHnb.jpg',
			manufacturer: 'ComfyLiving',
			description: 'Comfortable and stylish sofa for your living room.'
		},
		{
			name: 'Dog Food',
			price: 12.99,
			image: 'https://i.imgur.com/1CXWFkT.jpg',
			manufacturer: 'PetPal',
			description: 'Nutritious dog food for your furry friend.'
		},
		{
			name: 'Baby Diapers',
			price: 19.95,
			image: 'https://i.imgur.com/Y3fORfd.jpg',
			manufacturer: 'TinyTots',
			description: 'Soft and absorbent diapers for babies.'
		},
		{
			name: 'T-Shirt',
			price: 9.99,
			image: 'https://i.imgur.com/b3M4Qt6.jpg',
			manufacturer: 'FashionFab',
			description: 'Casual and comfortable cotton T-shirt.'
		},
		{
			name: 'Orange Juice',
			price: 3.49,
			image: 'https://i.imgur.com/q73irfP.jpg',
			manufacturer: 'JuicyCo',
			description: 'Freshly squeezed orange juice.'
		},
		{
			name: 'Toothpaste',
			price: 2.29,
			image: 'https://i.imgur.com/mNcvPIM.jpg',
			manufacturer: 'DentalCare',
			description: 'Fluoride toothpaste for strong teeth.'
		},
		{
			name: 'Laptop',
			price: 799.0,
			image: 'https://i.imgur.com/XLmFnc6.jpg',
			manufacturer: 'TechGenius',
			description: 'Powerful laptop for work and entertainment.'
		},
		{
			name: 'Coffee Table',
			price: 149.99,
			image: 'https://i.imgur.com/A28sBzC.jpg',
			manufacturer: 'FurnishHome',
			description: 'Elegant coffee table for your living room.'
		},
		{
			name: 'Cat Food',
			price: 8.75,
			image: 'https://i.imgur.com/0p5fAym.jpg',
			manufacturer: 'KittyCuisine',
			description: 'Delicious cat food for your feline companion.'
		},
		{
			name: 'Baby Wipes',
			price: 6.99,
			image: 'https://i.imgur.com/LaogAUX.jpg',
			manufacturer: 'TinyTots',
			description: 'Gentle baby wipes for easy cleaning.'
		},
		{
			name: 'Dress Shirt',
			price: 24.95,
			image: 'https://i.imgur.com/zaCOfM8.jpg',
			manufacturer: 'ElegantAttire',
			description: 'Formal dress shirt for special occasions.'
		},

		{
			name: 'Bananas',
			price: 1.49,
			image: 'https://i.imgur.com/mDlQQAz.jpg',
			manufacturer: 'TropicalHarvest',
			description: 'Sweet and nutritious bananas.'
		},
		{
			name: 'Conditioner',
			price: 4.99,
			image: 'https://i.imgur.com/pLbDZpt.jpg',
			manufacturer: 'SilkyStrands',
			description: 'Smooth and hydrating hair conditioner.'
		},
		{
			name: 'Tablet',
			price: 199.0,
			image: 'https://i.imgur.com/VmwOdk4.jpg',
			manufacturer: 'TechWonder',
			description: 'Versatile tablet for work and entertainment.'
		},
		{
			name: 'Desk',
			price: 149.5,
			image: 'https://i.imgur.com/UUryCVh.jpg',
			manufacturer: 'StudySolutions',
			description: 'Functional desk for your home office.'
		},
		{
			name: 'Cat Litter',
			price: 9.25,
			image: 'https://i.imgur.com/Zt9TPAK.jpg',
			manufacturer: 'KittyCuisine',
			description: 'Odor-absorbing cat litter for easy cleanup.'
		},
		{
			name: 'Baby Formula',
			price: 17.99,
			image: 'https://i.imgur.com/iiwHWYp.jpg',
			manufacturer: 'TinyTots',
			description: 'Nutrient-rich baby formula for infants.'
		},
		{
			name: 'Jeans',
			price: 29.95,
			image: 'https://i.imgur.com/qJrW28A.jpg',
			manufacturer: 'DenimDeluxe',
			description: 'Classic denim jeans for everyday wear.'
		},
		{
			name: 'Peaches',
			price: 3.29,
			image: 'https://i.imgur.com/2vvDInW.jpg',
			manufacturer: 'OrchardFresh',
			description: 'Juicy and flavorful peaches.'
		},
		{
			name: 'Deodorant',
			price: 3.75,
			image: 'https://i.imgur.com/1Mj9Dvf.jpg',
			manufacturer: 'FreshGlow',
			description: 'Long-lasting deodorant wbluetith a pleasant scent.'
		},
		{
			name: 'Bluetooth Speaker',
			price: 59.99,
			image: 'https://i.imgur.com/MnTUHX8.jpg',
			manufacturer: 'SonicSound',
			description: 'Compact Bluetooth speaker for wireless audio.'
		}
	]);

	process.exit();
})();
