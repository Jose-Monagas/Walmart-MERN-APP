require('dotenv').config();
require('./database');

const Department = require('../models/department');
// const subCategory = require('../models/subCategory')
const Product = require('../models/product')

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

await Product.deleteMany({});

const Products = await Product.create([
    {
        name: "Apples",
        price: 2.99,
        image: "https://i.imgur.com/jaWvFz4.jpg",
        manufacturer: "Farm Fresh",
        department: depts[0],
        description: "Fresh and delicious apples.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Shampoo",
        price: 5.49,
        image: "https://i.imgur.com/J6r4mEn.jpg",
        manufacturer: "CareClean",
        department: depts[1],
        description: "Gentle and nourishing shampoo.",
        review: "",
        subcategory: "Hair Care"
      },
      {
        name: "Smartphone",
        price: 399.99,
        image: "https://i.imgur.com/K3aI2Pe.jpg",
        manufacturer: "Techtronics",
        department: depts[2],
        description: "High-end smartphone with advanced features.",
        review: "",
        subcategory: "Mobile Phones"
      },
      {
        name: "Sofa",
        price: 299.00,
        image: "https://i.imgur.com/OgkFHnb.jpg",
        manufacturer: "ComfyLiving",
        department: depts[3],
        description: "Comfortable and stylish sofa for your living room.",
        review: "",
        subcategory: "Living Room Furniture"
      },
      {
        name: "Dog Food",
        price: 12.99,
        image: "https://i.imgur.com/1CXWFkT.jpg",
        manufacturer: "PetPal",
        department: depts[4],
        description: "Nutritious dog food for your furry friend.",
        review: "",
        subcategory: "Pet Food"
      },
      {
        name: "Baby Diapers",
        price: 19.95,
        image: "https://i.imgur.com/Y3fORfd.jpg",
        manufacturer: "TinyTots",
        department: depts[5],
        description: "Soft and absorbent diapers for babies.",
        review: "",
        subcategory: "Diapers"
      },
      {
        name: "T-Shirt",
        price: 9.99,
        image: "https://i.imgur.com/b3M4Qt6.jpg",
        manufacturer: "FashionFab",
        department: depts[6],
        description: "Casual and comfortable cotton T-shirt.",
        review: "",
        subcategory: "Casual Wear"
      },
      {
        name: "Orange Juice",
        price: 3.49,
        image: "https://i.imgur.com/q73irfP.jpg",
        manufacturer: "JuicyCo",
        department: depts[0],
        description: "Freshly squeezed orange juice.",
        review: "",
        subcategory: "Beverages"
      },
      {
        name: "Toothpaste",
        price: 2.29,
        image: "https://i.imgur.com/mNcvPIM.jpg",
        manufacturer: "DentalCare",
        department: depts[1],
        description: "Fluoride toothpaste for strong teeth.",
        review: "",
        subcategory: "Oral Care"
      },
      {
        name: "Laptop",
        price: 799.00,
        image: "https://i.imgur.com/XLmFnc6.jpg",
        manufacturer: "TechGenius",
        department: depts[2],
        description: "Powerful laptop for work and entertainment.",
        review: "",
        subcategory: "Computers"
      },
      {
        name: "Coffee Table",
        price: 149.99,
        image: "https://i.imgur.com/A28sBzC.jpg",
        manufacturer: "FurnishHome",
        department: depts[3],
        description: "Elegant coffee table for your living room.",
        review: "",
        subcategory: "Living Room Furniture"
      },
      {
        name: "Cat Food",
        price: 8.75,
        image: "",
        manufacturer: "KittyCuisine",
        department: depts[4],
        description: "Delicious cat food for your feline companion.",
        review: "",
        subcategory: "Pet Food"
      },
      {
        name: "Baby Wipes",
        price: 6.99,
        image: "https://i.imgur.com/LaogAUX.jpg",
        manufacturer: "TinyTots",
        department: depts[5],
        description: "Gentle baby wipes for easy cleaning.",
        review: "",
        subcategory: "Diapering"
      },
      {
        name: "Dress Shirt",
        price: 24.95,
        image: "https://i.imgur.com/zaCOfM8.jpg",
        manufacturer: "ElegantAttire",
        department: depts[6],
        description: "Formal dress shirt for special occasions.",
        review: "",
        subcategory: "Formal Wear"
      },

      {
        name: "Bananas",
        price: 1.49,
        image: "https://i.imgur.com/mDlQQAz.jpg",
        manufacturer: "TropicalHarvest",
        department: depts[0],
        description: "Sweet and nutritious bananas.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Conditioner",
        price: 4.99,
        image: "https://i.imgur.com/pLbDZpt.jpg",
        manufacturer: "SilkyStrands",
        department: depts[1],
        description: "Smooth and hydrating hair conditioner.",
        review: "",
        subcategory: "Hair Care"
      },
      {
        name: "Tablet",
        price: 199.00,
        image: "https://i.imgur.com/VmwOdk4.jpg",
        manufacturer: "TechWonder",
        department: depts[2],
        description: "Versatile tablet for work and entertainment.",
        review: "",
        subcategory: "Tablets"
      },
      {
        name: "Desk",
        price: 149.50,
        image: "https://i.imgur.com/UUryCVh.jpg",
        manufacturer: "StudySolutions",
        department: depts[3],
        description: "Functional desk for your home office.",
        review: "",
        subcategory: "Office Furniture"
      },
      {
        name: "Cat Litter",
        price: 9.25,
        image: "https://i.imgur.com/Zt9TPAK.jpg",
        manufacturer: "KittyCuisine",
        department: depts[4],
        description: "Odor-absorbing cat litter for easy cleanup.",
        review: "",
        subcategory: "Pet Supplies"
      },
      {
        name: "Baby Formula",
        price: 17.99,
        image: "https://i.imgur.com/iiwHWYp.jpg",
        manufacturer: "TinyTots",
        department: depts[5],
        description: "Nutrient-rich baby formula for infants.",
        review: "",
        subcategory: "Feeding"
      },
      {
        name: "Jeans",
        price: 29.95,
        image: "https://i.imgur.com/qJrW28A.jpg",
        manufacturer: "DenimDeluxe",
        department: depts[6],
        description: "Classic denim jeans for everyday wear.",
        review: "",
        subcategory: "Jeans"
      },
      {
        name: "Peaches",
        price: 3.29,
        image: "https://i.imgur.com/2vvDInW.jpg",
        manufacturer: "OrchardFresh",
        department: depts[0],
        description: "Juicy and flavorful peaches.",
        review: "",
        subcategory: "Fruits"
      },
      {
        name: "Deodorant",
        price: 3.75,
        image: "https://i.imgur.com/1Mj9Dvf.jpg",
        manufacturer: "FreshGlow",
        department: depts[1],
        description: "Long-lasting deodorant wbluetith a pleasant scent.",
        review: "",
        subcategory: "Personal Care"
      },
      {
        name: "Bluetooth Speaker",
        price: 59.99,
        image: "https://i.imgur.com/MnTUHX8.jpg",
        manufacturer: "SonicSound",
        department: depts[2],
        description: "Compact Bluetooth speaker for wireless audio.",
        review: "",
        subcategory: "Speakers"
      }

    
]);

process.exit();

})();