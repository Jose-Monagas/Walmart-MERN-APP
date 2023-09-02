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
		{ name: 'Fruits', products: ['Apples', 'Bananas', 'Peaches'], department: ['']},
		{ name: 'Hair Care', products: ['Shampoo', 'Conditioner'], department: ['']},
		{ name: 'Mobile Phones', products: ['Smartphone'], department: ['']},
		{ name: 'Living Room Furniture', products: ['Sofa', 'Coffee Table'], department: ['']},
		{ name: 'Pet Food', products: ['Dog Food', 'Cat Food'], department: ['']},
		{ name: 'Diapers', products: ['Baby Diapers', 'Baby Wipes'], department: ['']},
		{ name: 'Casual Wear', products: ['T-Shirt'], department: ['']},
    { name: 'Beverages', products: ['Orange Juice'], department: ['']},
    { name: 'Oral Care', products: ['Toothpaste'], department: ['']},
    { name: 'Computers', products: ['Laptop'], department: ['']},
    { name: 'Tablets', products: ['Tablet'], department: ['']},
    { name: 'Wipes', products: [], department: ['']},
    { name: 'Formal Wear', products: ['Dress Shirt'], department: ['']},
    { name: 'Office Furniture', products: ['Desk'], department: ['']},
    { name: 'Antiperspirants', products: [], department: ['']},
    { name: 'Speakers', products: [], department: ['']},
	  ]);

	  const products = await Product.create([
		{
			name: "Apples",
			price: 2.99,
			image: "https://i.imgur.com/jaWvFz4.jpg",
			manufacturer: "Farm Fresh",
			department: '',
			description: "Fresh and delicious apples.",
      review: '',
			subcategory: ''
    },
    { name: "Shampoo",
      price: 5.49,
      image: "https://i.imgur.com/J6r4mEn.jpg",
      manufacturer: "CareClean",
      department: '',
      description: "Gentle and nourishing shampoo.",
      review: '',
      subcategory: ''
    },
    {
      name: "Smartphone",
      price: 399.99,
      image: "https://i.imgur.com/K3aI2Pe.jpg",
      manufacturer: "Techtronics",
      department: '',
      description: "High-end smartphone with advanced features.",
      review: '',
      subcategory: ''
    },
    {
      name: "Sofa",
      price: 299.00,
      image: "https://i.imgur.com/OgkFHnb.jpg",
      manufacturer: "ComfyLiving",
      department: '',
      description: "Comfortable and stylish sofa for your living room.",
      review: '',
      subcategory: ''
    },
    {
      name: "Dog Food",
      price: 12.99,
      image: "https://i.imgur.com/1CXWFkT.jpg",
      manufacturer: "PetPal",
      department: '',
      description: "Nutritious dog food for your furry friend.",
      review: '',
      subcategory: ''
    },
    {
      name: "Baby Diapers",
      price: 19.95,
      image: "https://i.imgur.com/Y3fORfd.jpg",
      manufacturer: "TinyTots",
      department: '',
      description: "Soft and absorbent diapers for babies.",
      review: '',
      subcategory: ''
    },
    {
      name: "T-Shirt",
      price: 9.99,
      image: "https://i.imgur.com/b3M4Qt6.jpg",
      manufacturer: "FashionFab",
      department: '',
      description: "Casual and comfortable cotton T-shirt.",
      review: '',
      subcategory: ''
    },
    {
      name: "Orange Juice",
      price: 3.49,
      image: "https://i.imgur.com/q73irfP.jpg",
      manufacturer: "JuicyCo",
      department: '',
      description: "Freshly squeezed orange juice.",
      review: '',
      subcategory: ''
    },
    {
      name: "Toothpaste",
      price: 2.29,
      image: "https://i.imgur.com/mNcvPIM.jpg",
      manufacturer: "DentalCare",
      department: '',
      description: "Fluoride toothpaste for strong teeth.",
      review: '',
      subcategory: ''
    },
    {
      name: "Laptop",
      price: 799.00,
      image: "https://i.imgur.com/XLmFnc6.jpg",
      manufacturer: "TechGenius",
      department: '',
      description: "Powerful laptop for work and entertainment.",
      review: '',
      subcategory: ''
      },
      {
      name: "Coffee Table",
      price: 149.99,
      image: "https://i.imgur.com/A28sBzC.jpg",
      manufacturer: "FurnishHome",
      department: '',
      description: "Elegant coffee table for your living room.",
      review: '',
      subcategory: ''
      },
      {
      name: "Cat Food",
      price: 8.75,
      image: "https://i.imgur.com/0p5fAym.jpg",
      manufacturer: "KittyCuisine",
      department: '',
      description: "Delicious cat food for your feline companion.",
      review: '',
      subcategory: ''
      },
      {
      name: "Baby Wipes",
      price: 6.99,
      image: "https://i.imgur.com/LaogAUX.jpg",
      manufacturer: "TinyTots",
      department: '',
      description: "Gentle baby wipes for easy cleaning.",
      review: '',
      subcategory: ''
      },
      {
      name: "Dress Shirt",
      price: 24.95,
      image: "https://i.imgur.com/zaCOfM8.jpg",
      manufacturer: "ElegantAttire",
      department: '',
      description: "Formal dress shirt for special occasions.",
      review: '',
      subcategory: ''
      },
      
      {
      name: "Bananas",
      price: 1.49,
      image: "https://i.imgur.com/mDlQQAz.jpg",
      manufacturer: "TropicalHarvest",
      department: '',
      description: "Sweet and nutritious bananas.",
      review: '',
      subcategory: ''
      },
      {
      name: "Conditioner",
      price: 4.99,
      image: "https://i.imgur.com/pLbDZpt.jpg",
      manufacturer: "SilkyStrands",
      department: '',
      description: "Smooth and hydrating hair conditioner.",
      review: '',
      subcategory: ''
      },
      {
      name: "Tablet",
      price: 199.00,
      image: "https://i.imgur.com/VmwOdk4.jpg",
      manufacturer: "TechWonder",
      department: '',
      description: "Versatile tablet for work and entertainment.",
      review: '',
      subcategory: ''
      },
      {
      name: "Desk",
      price: 149.50,
      image: "https://i.imgur.com/UUryCVh.jpg",
      manufacturer: "StudySolutions",
      department: '',
      description: "Functional desk for your home office.",
      review: '',
      subcategory: ''
      },
      {
      name: "Cat Litter",
      price: 9.25,
      image: "https://i.imgur.com/Zt9TPAK.jpg",
      manufacturer: "KittyCuisine",
      department: '',
      description: "Odor-absorbing cat litter for easy cleanup.",
      review: '',
      subcategory: "Pet Supplies"
      },
      {
      name: "Baby Formula",
      price: 17.99,
      image: "https://i.imgur.com/iiwHWYp.jpg",
      manufacturer: "TinyTots",
      department: '',
      description: "Nutrient-rich baby formula for infants.",
      review: '',
      subcategory: "Feeding"
      },
      {
      name: "Jeans",
      price: 29.95,
      image: "https://i.imgur.com/qJrW28A.jpg",
      manufacturer: "DenimDeluxe",
      department: '',
      description: "Classic denim jeans for everyday wear.",
      review: '',
      subcategory: "Jeans"
      },
      {
      name: "Peaches",
      price: 3.29,
      image: "https://i.imgur.com/2vvDInW.jpg",
      manufacturer: "OrchardFresh",
      department: '',
      description: "Juicy and flavorful peaches.",
      review: '',
      subcategory: ''
      },
      {
      name: "Deodorant",
      price: 3.75,
      image: "https://i.imgur.com/1Mj9Dvf.jpg",
      manufacturer: "FreshGlow",
      department: '',
      description: "Long-lasting deodorant wbluetith a pleasant scent.",
      review: '',
      subcategory: ''
      },
      {
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://i.imgur.com/MnTUHX8.jpg",
      manufacturer: "SonicSound",
      department: '',
      description: "Compact Bluetooth speaker for wireless audio.",
      review: '',
      subcategory: ''
      }


    ])

        process.exit();
    })();

