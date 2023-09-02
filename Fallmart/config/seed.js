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
        { name: 'Furniture', subcategories:['Living Room Furniture', 'Office Furniture']},
        { name: 'Pet Supplies', subcategories:['Pet Food']}, 
        { name: 'Baby Supplies', subcategories:['Diapers', 'Wipes']},
        { name: 'Clothing', subcategories:['Casual Wear', 'Formal Wear']}
    ]);
	
	const subcategories = await SubCategory.create([
		{ name: 'Fruits', products: ['Apples', 'Bananas', 'Peaches'], department: ['Groceries']},
		{ name: 'Hair Care', products: ['Shampoo', 'Conditioner'], department: ['Personal Care']},
		{ name: 'Mobile Phones', products: ['Smartphone'], department: ['Electronics']},
		{ name: 'Living Room Furniture', products: ['Sofa', 'Coffee Table'], department: ['Furniture']},
		{ name: 'Pet Food', products: ['Dog Food', 'Cat Food', 'Cat Litter'], department: ['Pet Supplies']},
		{ name: 'Diapers', products: ['Baby Diapers', 'Baby Wipes'], department: ['Baby Supplies']},
		{ name: 'Casual Wear', products: ['T-Shirt', 'Jeans'], department: ['Clothing']},
    { name: 'Beverages', products: ['Orange Juice'], department: ['Groceries']},
    { name: 'Oral Care', products: ['Toothpaste'], department: ['Personal Care']},
    { name: 'Computers', products: ['Laptop'], department: ['Electronics']},
    { name: 'Tablets', products: ['Tablet'], department: ['Electronics']},
    { name: 'Wipes', products: ['Baby Formula', 'Baby Wipes'], department: ['Baby Supplies']},
    { name: 'Formal Wear', products: ['Dress Shirt'], department: ['Clothing']},
    { name: 'Office Furniture', products: ['Desk'], department: ['Furniture']},
    { name: 'Antiperspirants', products: ['Deodorant'], department: ['Personal Care']},
    { name: 'Speakers', products: ['Bluetooth Speaker'], department: ['Electronics']},
	  ]);

	  const products = await Product.create([
		{
			name: "Apples",
			price: 2.99,
			image: "https://i.imgur.com/jaWvFz4.jpg",
			manufacturer: "Farm Fresh",
			department: 'Groceries',
			description: "Fresh and delicious apples.",
      review: '',
			subcategory: 'Fruits'
    },
    { name: "Shampoo",
      price: 5.49,
      image: "https://i.imgur.com/J6r4mEn.jpg",
      manufacturer: "CareClean",
      department: 'Personal Care',
      description: "Gentle and nourishing shampoo.",
      review: '',
      subcategory: 'Hair care'
    },
    {
      name: "Smartphone",
      price: 399.99,
      image: "https://i.imgur.com/K3aI2Pe.jpg",
      manufacturer: "Techtronics",
      department: 'Electronics',
      description: "High-end smartphone with advanced features.",
      review: '',
      subcategory: 'Mobile Phones'
    },
    {
      name: "Sofa",
      price: 299.00,
      image: "https://i.imgur.com/OgkFHnb.jpg",
      manufacturer: "ComfyLiving",
      department: 'Furniture',
      description: "Comfortable and stylish sofa for your living room.",
      review: '',
      subcategory: 'Living Room Furniture'
    },
    {
      name: "Dog Food",
      price: 12.99,
      image: "https://i.imgur.com/1CXWFkT.jpg",
      manufacturer: "PetPal",
      department: 'Pet Supplies',
      description: "Nutritious dog food for your furry friend.",
      review: '',
      subcategory: 'Pet Food'
    },
    {
      name: "Baby Diapers",
      price: 19.95,
      image: "https://i.imgur.com/Y3fORfd.jpg",
      manufacturer: "TinyTots",
      department: 'Baby Supplies',
      description: "Soft and absorbent diapers for babies.",
      review: '',
      subcategory: 'Diapers'
    },
    {
      name: "T-Shirt",
      price: 9.99,
      image: "https://i.imgur.com/b3M4Qt6.jpg",
      manufacturer: "FashionFab",
      department: 'Clothing',
      description: "Casual and comfortable cotton T-shirt.",
      review: '',
      subcategory: 'Casual Wear'
    },
    {
      name: "Orange Juice",
      price: 3.49,
      image: "https://i.imgur.com/q73irfP.jpg",
      manufacturer: "JuicyCo",
      department: 'Groceries',
      description: "Freshly squeezed orange juice.",
      review: '',
      subcategory: 'Baverages'
    },
    {
      name: "Toothpaste",
      price: 2.29,
      image: "https://i.imgur.com/mNcvPIM.jpg",
      manufacturer: "DentalCare",
      department: 'Personal Care',
      description: "Fluoride toothpaste for strong teeth.",
      review: '',
      subcategory: 'Oral Care'
    },
    {
      name: "Laptop",
      price: 799.00,
      image: "https://i.imgur.com/XLmFnc6.jpg",
      manufacturer: "TechGenius",
      department: 'Electronics',
      description: "Powerful laptop for work and entertainment.",
      review: '',
      subcategory: 'Computers'
      },
      {
      name: "Coffee Table",
      price: 149.99,
      image: "https://i.imgur.com/A28sBzC.jpg",
      manufacturer: "FurnishHome",
      department: 'Furniture',
      description: "Elegant coffee table for your living room.",
      review: '',
      subcategory: 'Living Room Funiture'
      },
      {
      name: "Cat Food",
      price: 8.75,
      image: "https://i.imgur.com/0p5fAym.jpg",
      manufacturer: "KittyCuisine",
      department: 'Pet Supplies',
      description: "Delicious cat food for your feline companion.",
      review: '',
      subcategory: 'Pet Food'
      },
      {
      name: "Baby Wipes",
      price: 6.99,
      image: "https://i.imgur.com/LaogAUX.jpg",
      manufacturer: "TinyTots",
      department: 'Baby Supplies',
      description: "Gentle baby wipes for easy cleaning.",
      review: '',
      subcategory: 'Wipes'
      },
      {
      name: "Dress Shirt",
      price: 24.95,
      image: "https://i.imgur.com/zaCOfM8.jpg",
      manufacturer: "ElegantAttire",
      department: 'Clothing',
      description: "Formal dress shirt for special occasions.",
      review: '',
      subcategory: 'Formal Wear'
      },
      
      {
      name: "Bananas",
      price: 1.49,
      image: "https://i.imgur.com/mDlQQAz.jpg",
      manufacturer: "TropicalHarvest",
      department: 'Groceries',
      description: "Sweet and nutritious bananas.",
      review: '',
      subcategory: 'Fruits'
      },
      {
      name: "Conditioner",
      price: 4.99,
      image: "https://i.imgur.com/pLbDZpt.jpg",
      manufacturer: "SilkyStrands",
      department: 'Personal Care',
      description: "Smooth and hydrating hair conditioner.",
      review: '',
      subcategory: 'Hair Care'
      },
      {
      name: "Tablet",
      price: 199.00,
      image: "https://i.imgur.com/VmwOdk4.jpg",
      manufacturer: "TechWonder",
      department: 'Electronics',
      description: "Versatile tablet for work and entertainment.",
      review: '',
      subcategory: 'Tablets'
      },
      {
      name: "Desk",
      price: 149.50,
      image: "https://i.imgur.com/UUryCVh.jpg",
      manufacturer: "StudySolutions",
      department: 'Furniture',
      description: "Functional desk for your home office.",
      review: '',
      subcategory: 'Office Furniture'
      },
      {
      name: "Cat Litter",
      price: 9.25,
      image: "https://i.imgur.com/Zt9TPAK.jpg",
      manufacturer: "KittyCuisine",
      department: 'Pet Supplies',
      description: "Odor-absorbing cat litter for easy cleanup.",
      review: '',
      subcategory: "Pet Food"
      },
      {
      name: "Baby Formula",
      price: 17.99,
      image: "https://i.imgur.com/iiwHWYp.jpg",
      manufacturer: "TinyTots",
      department: 'Baby Supplies',
      description: "Nutrient-rich baby formula for infants.",
      review: '',
      subcategory: "Wipes"
      },
      {
      name: "Jeans",
      price: 29.95,
      image: "https://i.imgur.com/qJrW28A.jpg",
      manufacturer: "DenimDeluxe",
      department: 'Clothing',
      description: "Classic denim jeans for everyday wear.",
      review: '',
      subcategory: "Casual Wear"
      },
      {
      name: "Peaches",
      price: 3.29,
      image: "https://i.imgur.com/2vvDInW.jpg",
      manufacturer: "OrchardFresh",
      department: 'Groceries',
      description: "Juicy and flavorful peaches.",
      review: '',
      subcategory: 'Fruits'
      },
      {
      name: "Deodorant",
      price: 3.75,
      image: "https://i.imgur.com/1Mj9Dvf.jpg",
      manufacturer: "FreshGlow",
      department: 'Personal Care',
      description: "Long-lasting deodorant wbluetith a pleasant scent.",
      review: '',
      subcategory: 'Antiperspirants'
      },
      {
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://i.imgur.com/MnTUHX8.jpg",
      manufacturer: "SonicSound",
      department: 'Electronics',
      description: "Compact Bluetooth speaker for wireless audio.",
      review: '',
      subcategory: 'Computers'
      }


    ])

        process.exit();
    })();
