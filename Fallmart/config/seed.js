// require('dotenv').config();;
require('./database');

const Department = require('../models/department');
const subCategory = require('../models/subCategory')
const Product = require('../../product')

(async function() {

    await Department.deleteMany({});
    const depts = await Department.create([
      {name: 'Groceries', sortOrder: 10}, //0
      {name: 'Personal Care', sortOrder: 20}, //1
      {name: 'Electronics', sortOrder: 30}, //2
      {name: 'Home & Furniture', sortOrder: 40}, //3
      {name: 'Pets', sortOrder: 50}, //4
      {name: 'Baby', sortOrder: 60}, //5
      {name: 'Clothing', sortOrder: 70}, //6
    ]);

await Item.deleteMany({});

const Products = await Product.create([
    {
        name: "Apples",
        price: 2.99,
        image: "https://i.imgur.com/jaWvFz4.jpg",
        manufacturer: "Farm Fresh",
        department: "Groceries",
        description: "Fresh and delicious apples.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Shampoo",
        price: 5.49,
        image: "https://i.imgur.com/J6r4mEn.jpg",
        manufacturer: "CareClean",
        department: "Personal Care",
        description: "Gentle and nourishing shampoo.",
        review: "",
        subcategory: "Hair Care"
      },
      {
        name: "Smartphone",
        price: 399.99,
        image: "https://i.imgur.com/K3aI2Pe.jpg",
        manufacturer: "Techtronics",
        department: "Electronics",
        description: "High-end smartphone with advanced features.",
        review: "",
        subcategory: "Mobile Phones"
      },
      {
        name: "Sofa",
        price: 299.00,
        image: "https://i.imgur.com/OgkFHnb.jpg",
        manufacturer: "ComfyLiving",
        department: "Home Furniture",
        description: "Comfortable and stylish sofa for your living room.",
        review: "",
        subcategory: "Living Room Furniture"
      },
      {
        name: "Dog Food",
        price: 12.99,
        image: "https://i.imgur.com/1CXWFkT.jpg",
        manufacturer: "PetPal",
        department: "Pets",
        description: "Nutritious dog food for your furry friend.",
        review: "",
        subcategory: "Pet Food"
      },
      {
        name: "Baby Diapers",
        price: 19.95,
        image: "https://i.imgur.com/Y3fORfd.jpg",
        manufacturer: "TinyTots",
        department: "Baby",
        description: "Soft and absorbent diapers for babies.",
        review: "",
        subcategory: "Diapers"
      },
      {
        name: "T-Shirt",
        price: 9.99,
        image: "https://i.imgur.com/b3M4Qt6.jpg",
        manufacturer: "FashionFab",
        department: "Clothing",
        description: "Casual and comfortable cotton T-shirt.",
        review: "",
        subcategory: "Casual Wear"
      },
      {
        name: "Orange Juice",
        price: 3.49,
        image: "https://i.imgur.com/q73irfP.jpg",
        manufacturer: "JuicyCo",
        department: "Groceries",
        description: "Freshly squeezed orange juice.",
        review: "",
        subcategory: "Beverages"
      },
      {
        name: "Toothpaste",
        price: 2.29,
        image: "https://i.imgur.com/mNcvPIM.jpg",
        manufacturer: "DentalCare",
        department: "Personal Care",
        description: "Fluoride toothpaste for strong teeth.",
        review: "",
        subcategory: "Oral Care"
      },
      {
        name: "Laptop",
        price: 799.00,
        image: "https://i.imgur.com/XLmFnc6.jpg",
        manufacturer: "TechGenius",
        department: "Electronics",
        description: "Powerful laptop for work and entertainment.",
        review: "",
        subcategory: "Computers"
      },
      {
        name: "Coffee Table",
        price: 149.99,
        image: "https://i.imgur.com/A28sBzC.jpg",
        manufacturer: "FurnishHome",
        department: "Home Furniture",
        description: "Elegant coffee table for your living room.",
        review: "",
        subcategory: "Living Room Furniture"
      },
      {
        name: "Cat Food",
        price: 8.75,
        image: "",
        manufacturer: "KittyCuisine",
        department: "Pets",
        description: "Delicious cat food for your feline companion.",
        review: "",
        subcategory: "Pet Food"
      },
      {
        name: "Baby Wipes",
        price: 6.99,
        image: "https://i.imgur.com/LaogAUX.jpg",
        manufacturer: "TinyTots",
        department: "Baby",
        description: "Gentle baby wipes for easy cleaning.",
        review: "",
        subcategory: "Diapering"
      },
      {
        name: "Dress Shirt",
        price: 24.95,
        image: "https://i.imgur.com/zaCOfM8.jpg",
        manufacturer: "ElegantAttire",
        department: "Clothing",
        description: "Formal dress shirt for special occasions.",
        review: "",
        subcategory: "Formal Wear"
      },

      {
        name: "Bananas",
        price: 1.49,
        image: "https://i.imgur.com/mDlQQAz.jpg",
        manufacturer: "TropicalHarvest",
        department: "Groceries",
        description: "Sweet and nutritious bananas.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Conditioner",
        price: 4.99,
        image: "https://i.imgur.com/pLbDZpt.jpg",
        manufacturer: "SilkyStrands",
        department: "Personal Care",
        description: "Smooth and hydrating hair conditioner.",
        review: "",
        subcategory: "Hair Care"
      },
      {
        name: "Tablet",
        price: 199.00,
        image: "https://i.imgur.com/VmwOdk4.jpg",
        manufacturer: "TechWonder",
        department: "Electronics",
        description: "Versatile tablet for work and entertainment.",
        review: "",
        subcategory: "Tablets"
      },
      {
        name: "Desk",
        price: 149.50,
        image: "https://i.imgur.com/UUryCVh.jpg",
        manufacturer: "StudySolutions",
        department: "Home Furniture",
        description: "Functional desk for your home office.",
        review: "",
        subcategory: "Office Furniture"
      },
      {
        name: "Cat Litter",
        price: 9.25,
        image: "https://i.imgur.com/Zt9TPAK.jpg",
        manufacturer: "KittyCuisine",
        department: "Pets",
        description: "Odor-absorbing cat litter for easy cleanup.",
        review: "",
        subcategory: "Pet Supplies"
      },
      {
        name: "Baby Formula",
        price: 17.99,
        image: "https://i.imgur.com/iiwHWYp.jpg",
        manufacturer: "TinyTots",
        department: "Baby",
        description: "Nutrient-rich baby formula for infants.",
        review: "",
        subcategory: "Feeding"
      },
      {
        name: "Jeans",
        price: 29.95,
        image: "https://i.imgur.com/qJrW28A.jpg",
        manufacturer: "DenimDeluxe",
        department: "Clothing",
        description: "Classic denim jeans for everyday wear.",
        review: "",
        subcategory: "Jeans"
      },
      {
        name: "Peaches",
        price: 3.29,
        image: "https://i.imgur.com/2vvDInW.jpg",
        manufacturer: "OrchardFresh",
        department: "Groceries",
        description: "Juicy and flavorful peaches.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Deodorant",
        price: 3.75,
        image: "https://i.imgur.com/1Mj9Dvf.jpg",
        manufacturer: "FreshGlow",
        department: "Personal Care",
        description: "Long-lasting deodorant wbluetith a pleasant scent.",
        review: "",
        subcategory: "Personal Care"
      },
      {
        name: "Bluetooth Speaker",
        price: 59.99,
        image: "https://i.imgur.com/MnTUHX8.jpg",
        manufacturer: "SonicSound",
        department: "Electronics",
        description: "Compact Bluetooth speaker for wireless audio.",
        review: "",
        subcategory: "Speakers"
      }

    
]);

process.exit();

});