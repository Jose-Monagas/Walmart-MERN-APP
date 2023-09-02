require('dotenv').config();
require('./database');

const Department = require('../models/department');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
(async function () {
	await Department.deleteMany({});
	await SubCategory.deleteMany({});
	await Product.deleteMany({});

	const products = await Product.create([
		{
			name: 'Apples',
			price: 2.99,
			image: 'https://i.imgur.com/jaWvFz4.jpg',
			manufacturer: 'Farm Fresh',
			description: 'Fresh and delicious apples.'
		}, // 0 - Fruits
		{
			name: 'Shampoo',
			price: 5.49,
			image: 'https://i.imgur.com/J6r4mEn.jpg',
			manufacturer: 'CareClean',
			description: 'Gentle and nourishing shampoo.'
		}, // 1 - Hair Care
		{
			name: 'Smartphone',
			price: 399.99,
			image: 'https://i.imgur.com/K3aI2Pe.jpg',
			manufacturer: 'Techtronics',
			description: 'High-end smartphone with advanced features.'
		}, // 2 - Mobile Phones
		{
			name: 'Sofa',
			price: 299.0,
			image: 'https://i.imgur.com/OgkFHnb.jpg',
			manufacturer: 'ComfyLiving',
			description: 'Comfortable and stylish sofa for your living room.'
		}, // 3 - Living Room Furniture
		{
			name: 'Dog Food',
			price: 12.99,
			image: 'https://i.imgur.com/1CXWFkT.jpg',
			manufacturer: 'PetPal',
			description: 'Nutritious dog food for your furry friend.'
		}, // 4 - Pet Food
		{
			name: 'Baby Diapers',
			price: 19.95,
			image: 'https://i.imgur.com/Y3fORfd.jpg',
			manufacturer: 'TinyTots',
			description: 'Soft and absorbent diapers for babies.'
		}, // 5 - Diapers
		{
			name: 'T-Shirt',
			price: 9.99,
			image: 'https://i.imgur.com/b3M4Qt6.jpg',
			manufacturer: 'FashionFab',
			description: 'Casual and comfortable cotton T-shirt.'
		}, // 6 - Casual Wear
		{
			name: 'Orange Juice',
			price: 3.49,
			image: 'https://i.imgur.com/q73irfP.jpg',
			manufacturer: 'JuicyCo',
			description: 'Freshly squeezed orange juice.'
		}, // 7 - Beverages
		{
			name: 'Toothpaste',
			price: 2.29,
			image: 'https://i.imgur.com/mNcvPIM.jpg',
			manufacturer: 'DentalCare',
			description: 'Fluoride toothpaste for strong teeth.'
		}, // 8 - Oral Care
		{
			name: 'Laptop',
			price: 799.0,
			image: 'https://i.imgur.com/XLmFnc6.jpg',
			manufacturer: 'TechGenius',
			description: 'Powerful laptop for work and entertainment.'
		}, // 9 - Computers
		{
			name: 'Coffee Table',
			price: 149.99,
			image: 'https://i.imgur.com/A28sBzC.jpg',
			manufacturer: 'FurnishHome',
			description: 'Elegant coffee table for your living room.'
		}, // 10 - Office Furniture
		{
			name: 'Cat Food',
			price: 8.75,
			image: 'https://i.imgur.com/0p5fAym.jpg',
			manufacturer: 'KittyCuisine',
			description: 'Delicious cat food for your feline companion.'
		}, // 11 - Pet Food
		{
			name: 'Baby Wipes',
			price: 6.99,
			image: 'https://i.imgur.com/LaogAUX.jpg',
			manufacturer: 'TinyTots',
			description: 'Gentle baby wipes for easy cleaning.'
		}, // 12 - Wipes
		{
			name: 'Dress Shirt',
			price: 24.95,
			image: 'https://i.imgur.com/zaCOfM8.jpg',
			manufacturer: 'ElegantAttire',
			description: 'Formal dress shirt for special occasions.'
		}, // 13 - Formal Wear

		{
			name: 'Bananas',
			price: 1.49,
			image: 'https://i.imgur.com/mDlQQAz.jpg',
			manufacturer: 'TropicalHarvest',
			description: 'Sweet and nutritious bananas.'
		}, // 14 - Fruit
		{
			name: 'Conditioner',
			price: 4.99,
			image: 'https://i.imgur.com/pLbDZpt.jpg',
			manufacturer: 'SilkyStrands',
			description: 'Smooth and hydrating hair conditioner.'
		}, // 15 - Hair Care
		{
			name: 'Tablet',
			price: 199.0,
			image: 'https://i.imgur.com/VmwOdk4.jpg',
			manufacturer: 'TechWonder',
			description: 'Versatile tablet for work and entertainment.'
		}, // 16 - Tablets
		{
			name: 'Desk',
			price: 149.5,
			image: 'https://i.imgur.com/UUryCVh.jpg',
			manufacturer: 'StudySolutions',
			description: 'Functional desk for your home office.'
		}, // 17 - Office Furniture
		{
			name: 'Cat Litter',
			price: 9.25,
			image: 'https://i.imgur.com/Zt9TPAK.jpg',
			manufacturer: 'KittyCuisine',
			description: 'Odor-absorbing cat litter for easy cleanup.'
		}, // 18 - Pet Food
		{
			name: 'Baby Formula',
			price: 17.99,
			image: 'https://i.imgur.com/iiwHWYp.jpg',
			manufacturer: 'TinyTots',
			description: 'Nutrient-rich baby formula for infants.'
		}, // 19 - Diapers
		{
			name: 'Jeans',
			price: 29.95,
			image: 'https://i.imgur.com/qJrW28A.jpg',
			manufacturer: 'DenimDeluxe',
			description: 'Classic denim jeans for everyday wear.'
		}, // 20 - Casual Wear
		{
			name: 'Peaches',
			price: 3.29,
			image: 'https://i.imgur.com/2vvDInW.jpg',
			manufacturer: 'OrchardFresh',
			description: 'Juicy and flavorful peaches.'
		}, // 21 - Fruits
		{
			name: 'Deodorant',
			price: 3.75,
			image: 'https://i.imgur.com/1Mj9Dvf.jpg',
			manufacturer: 'FreshGlow',
			description: 'Long-lasting deodorant wbluetith a pleasant scent.'
		}, // 22 - Antiperspirants
		{
			name: 'Bluetooth Speaker',
			price: 59.99,
			image: 'https://i.imgur.com/MnTUHX8.jpg',
			manufacturer: 'SonicSound',
			description: 'Compact Bluetooth speaker for wireless audio.'
		} // 23 - Speakers
	]);

	const subcategories = await SubCategory.create([
		{
			name: 'Fruits',
			products: [products[0]._id, products[14]._id, products[21]._id]
		}, // Groceries - 0
		{ name: 'Hair Care', products: [products[1]._id, products[15]._id] }, // Personal Care - 1
		{ name: 'Mobile Phones', products: [products[2]._id] }, // Electronics - 2
		{
			name: 'Living Room Furniture',
			products: [products[3]._id]
		}, // Home Furniture - 3
		{
			name: 'Pet Food',
			products: [products[4]._id, products[11]._id]
		}, // Pets - 4
		{ name: 'Diapers', products: [products[5]._id, products[19]._id] }, // Baby - 5
		{ name: 'Casual Wear', products: [products[6]._id, products[20]._id] }, // Clothing - 6
		{ name: 'Beverages', products: [products[7]._id] }, // Groceries - 7
		{ name: 'Oral Care', products: [products[8]._id] }, // Personal Care - 8
		{ name: 'Computers', products: [products[9]._id] }, // Electronics - 9
		{ name: 'Tablets', products: [products[16]._id] }, // Electronics - 10
		{ name: 'Wipes', products: [products[12]._id] }, // Baby - 11
		{ name: 'Formal Wear', products: [products[13]._id] }, // Clothing - 12
		{
			name: 'Office Furniture',
			products: [products[10]._id, products[17]._id]
		}, // Home Furniture - 13
		{ name: 'Antiperspirants', products: [products[22]._id] }, // Personal Care - 14
		{ name: 'Speakers', products: [products[23]._id] } // Electronics - 15
	]);

	const departments = await Department.create([
		{
			name: 'Groceries',
			subcategories: [subcategories[0]._id, subcategories[7]._id]
		},
		{
			name: 'Personal Care',
			subcategories: [
				subcategories[1]._id,
				subcategories[8]._id,
				subcategories[14]._id
			]
		},
		{
			name: 'Electronics',
			subcategories: [
				subcategories[2]._id,
				subcategories[9]._id,
				subcategories[10]._id,
				subcategories[15]._id
			]
		},
		{
			name: 'Home Furniture',
			subcategories: [subcategories[3]._id, subcategories[13]._id]
		},
		{
			name: 'Pets',
			subcategories: [subcategories[4]._id]
		},
		{
			name: 'Baby',
			subcategories: [subcategories[5]._id, subcategories[11]._id]
		},
		{
			name: 'Clothing',
			subcategories: [subcategories[6]._id, subcategories[12]._id]
		}
	]);

	process.exit();
})();
