require('dotenv').config();
require('./database');

const Department = require('../models/department');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
(async function (){
    await Department.deleteMany({});
	await SubCategory.deleteMany({})
	await Product.deleteMany({})
    const departments = await Department.create([
        { name: 'Groceries', subcategories:['Fruits', 'Baverages']},
        { name: 'Personal Care', subcategories:['Hair Care', 'Oral Care', 'Antiperspirants']},
        { name: 'Electronics', subcategories:['Mobile Phones', 'Computers', 'Tablets']},
        { name: 'Furniture', subcategories:['Living Room Furniture', 'Office Furniture'] },
        { name: 'Pet Supplies', subcategories:['Pet Food'] }, 
        { name: 'Baby Supplies', subcategories:['Diapers', 'Wipes'] },
        { name: 'Clothing', subcategories:['Casual Wear', 'Formal Wear'] }
    ]);
	
	const subcategories = await SubCategory.create([
		{ name: 'Fruits', products: ['Apples', 'Bananas', 'Peaches'], department: departments[0]._id},
		{ name: 'Hair Care', products: ['Shampoo', 'Conditioner'], department: departments[1]._id},
		{ name: 'Mobile Phones', products: ['Smartphone'], department: departments[2]._id, department: departments[0]._id },
		{ name: 'Living Room Furniture', products: ['Sofa', 'Coffee Table'], department: departments[3]._id },
		{ name: 'Pet Food', products: ['Dog Food', 'Cat Food'], department: departments[4]._id },
		{ name: 'Diapers', products: ['Baby Diapers', 'Baby Wipes'], department: departments[5]._id },
		{ name: 'Casual Wear', products: ['T-Shirt'], department: departments[6]._id },
    	{ name: 'Beverages', products: ['Orange Juice'], department: departments[0]._id },
    	{ name: 'Oral Care', products: ['Toothpaste'], department: departments[1]._id },
    	{ name: 'Computers', products: ['Laptop'], department: departments[2]._id },
    	{ name: 'Tablets', products: ['Tablet'], department: departments[2]._id },
    	{ name: 'Wipes', products: [], department: departments[5]._id },
    	{ name: 'Formal Wear', products: ['Dress Shirt'], department: departments[6]._id },
    	{ name: 'Office Furniture', products: ['Desk'], department: departments[3]._id },
    	{ name: 'Antiperspirants', products: [], department: departments[1]._id },
    	{ name: 'Speakers', products: [], department: departments[2]._id },
	  ]);

	  const products = await Product.create([
		{
			name: "Apples",
			price: 2.99,
			image: "https://i.imgur.com/jaWvFz4.jpg",
			manufacturer: "Farm Fresh",
			department: departments[0]._id,
			description: "Fresh and delicious apples.",
			subcategory: subcategories[0]._id
    },
    { name: "Shampoo",
      price: 5.49,
      image: "https://i.imgur.com/J6r4mEn.jpg",
      manufacturer: "CareClean",
      department: departments[1]._id,
      description: "Gentle and nourishing shampoo.",
      
      subcategory: subcategories[1]._id
    },
    {
      name: "Smartphone",
      price: 399.99,
      image: "https://i.imgur.com/K3aI2Pe.jpg",
      manufacturer: "Techtronics",
      department: departments[2]._id,
      description: "High-end smartphone with advanced features.",
      
      subcategory: subcategories[2]._id
    },
    {
      name: "Sofa",
      price: 299.00,
      image: "https://i.imgur.com/OgkFHnb.jpg",
      manufacturer: "ComfyLiving",
      department: departments[3]._id,
      description: "Comfortable and stylish sofa for your living room.",
      
      subcategory: subcategories[3]._id
    },
    {
      name: "Dog Food",
      price: 12.99,
      image: "https://i.imgur.com/1CXWFkT.jpg",
      manufacturer: "PetPal",
      department: departments[4]._id,
      description: "Nutritious dog food for your furry friend.",
      
      subcategory: subcategories[4]._id
    },
    {
      name: "Baby Diapers",
      price: 19.95,
      image: "https://i.imgur.com/Y3fORfd.jpg",
      manufacturer: "TinyTots",
      department: departments[5]._id,
      description: "Soft and absorbent diapers for babies.",
      
      subcategory: subcategories[5]._id
    },
    {
      name: "T-Shirt",
      price: 9.99,
      image: "https://i.imgur.com/b3M4Qt6.jpg",
      manufacturer: "FashionFab",
      department: departments[6]._id,
      description: "Casual and comfortable cotton T-shirt.",
      
      subcategory: subcategories[5]._id
    },
    {
      name: "Orange Juice",
      price: 3.49,
      image: "https://i.imgur.com/q73irfP.jpg",
      manufacturer: "JuicyCo",
      department: departments[0]._id,
      description: "Freshly squeezed orange juice.",
      
      subcategory: subcategories[0]._id
    },
    {
      name: "Toothpaste",
      price: 2.29,
      image: "https://i.imgur.com/mNcvPIM.jpg",
      manufacturer: "DentalCare",
      department: departments[1]._id,
      description: "Fluoride toothpaste for strong teeth.",
      
      subcategory: subcategories[1]._id
    },
    {
      name: "Laptop",
      price: 799.00,
      image: "https://i.imgur.com/XLmFnc6.jpg",
      manufacturer: "TechGenius",
      department: departments[2]._id,
      description: "Powerful laptop for work and entertainment.",
      
      subcategory: subcategories[2]._id
      },
      {
      name: "Coffee Table",
      price: 149.99,
      image: "https://i.imgur.com/A28sBzC.jpg",
      manufacturer: "FurnishHome",
      department: departments[3]._id,
      description: "Elegant coffee table for your living room.",
      
      subcategory: subcategories[3]._id
      },
      {
      name: "Cat Food",
      price: 8.75,
      image: "https://i.imgur.com/0p5fAym.jpg",
      manufacturer: "KittyCuisine",
      department: departments[4]._id,
      description: "Delicious cat food for your feline companion.",
      
      subcategory: subcategories[4]._id
      },
      {
      name: "Baby Wipes",
      price: 6.99,
      image: "https://i.imgur.com/LaogAUX.jpg",
      manufacturer: "TinyTots",
      department: departments[5]._id,
      description: "Gentle baby wipes for easy cleaning.",
      
      subcategory: subcategories[2]._id
      },
      {
      name: "Dress Shirt",
      price: 24.95,
      image: "https://i.imgur.com/zaCOfM8.jpg",
      manufacturer: "ElegantAttire",
      department: departments[6]._id,
      description: "Formal dress shirt for special occasions.",
      
      subcategory: subcategories[6]._id
      },
      
      {
      name: "Bananas",
      price: 1.49,
      image: "https://i.imgur.com/mDlQQAz.jpg",
      manufacturer: "TropicalHarvest",
      department: departments[0]._id,
      description: "Sweet and nutritious bananas.",
      
      subcategory: subcategories[0]._id
      },
      {
      name: "Conditioner",
      price: 4.99,
      image: "https://i.imgur.com/pLbDZpt.jpg",
      manufacturer: "SilkyStrands",
      department: departments[1]._id,
      description: "Smooth and hydrating hair conditioner.",
      
      subcategory: subcategories[1]._id
      },
      {
      name: "Tablet",
      price: 199.00,
      image: "https://i.imgur.com/VmwOdk4.jpg",
      manufacturer: "TechWonder",
      department: departments[2]._id,
      description: "Versatile tablet for work and entertainment.",
      
      subcategory: subcategories[2]._id
      },
      {
      name: "Desk",
      price: 149.50,
      image: "https://i.imgur.com/UUryCVh.jpg",
      manufacturer: "StudySolutions",
      department: departments[3]._id,
      description: "Functional desk for your home office.",
      
      subcategory: subcategories[3]._id
      },
      {
      name: "Cat Litter",
      price: 9.25,
      image: "https://i.imgur.com/Zt9TPAK.jpg",
      manufacturer: "KittyCuisine",
      department: departments[4]._id,
      description: "Odor-absorbing cat litter for easy cleanup.",
      
      subcategory: "Pet Supplies"
      },
      {
      name: "Baby Formula",
      price: 17.99,
      image: "https://i.imgur.com/iiwHWYp.jpg",
      manufacturer: "TinyTots",
      department: departments[5]._id,
      description: "Nutrient-rich baby formula for infants.",
      
      subcategory: "Feeding"
      },
      {
      name: "Jeans",
      price: 29.95,
      image: "https://i.imgur.com/qJrW28A.jpg",
      manufacturer: "DenimDeluxe",
      department: departments[6]._id,
      description: "Classic denim jeans for everyday wear.",
  
      subcategory: "Jeans"
      },
      {
      name: "Peaches",
      price: 3.29,
      image: "https://i.imgur.com/2vvDInW.jpg",
      manufacturer: "OrchardFresh",
      department: departments[0]._id,
      description: "Juicy and flavorful peaches.",
  
      subcategory: subcategories[0]._id
      },
      {
      name: "Deodorant",
      price: 3.75,
      image: "https://i.imgur.com/1Mj9Dvf.jpg",
      manufacturer: "FreshGlow",
      department: departments[1]._id,
      description: "Long-lasting deodorant wbluetith a pleasant scent.",
 
      subcategory: subcategories[1]._id
      },
      {
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://i.imgur.com/MnTUHX8.jpg",
      manufacturer: "SonicSound",
      department: departments[2]._id,
      description: "Compact Bluetooth speaker for wireless audio.",
  
      subcategory: subcategories[1]._id
      }


    ])

        process.exit();
    })();

