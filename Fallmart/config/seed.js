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
    description: 'Fresh and delicious apples.',
    reviews: ['These apples are incredibly fresh and delicious. I buy them every week!']
  }, // 0 - Fruits
  {
    name: 'Shampoo',
    price: 5.49,
    image: 'https://i.imgur.com/J6r4mEn.jpg',
    manufacturer: 'CareClean',
    description: 'Gentle and nourishing shampoo.',
    reviews: ["I love this shampoo! It's gentle on my hair and leaves it feeling nourished."]
  }, // 1 - Hair Care
  {
    name: 'Smartphone',
    price: 399.99,
    image: 'https://i.imgur.com/K3aI2Pe.jpg',
    manufacturer: 'Techtronics',
    description: 'High-end smartphone with advanced features.',
    reviews: ['This smartphone is amazing! It has all the advanced features I need.']
  }, // 2 - Mobile Phones
  {
    name: 'Sofa',
    price: 299.0,
    image: 'https://i.imgur.com/OgkFHnb.jpg',
    manufacturer: 'ComfyLiving',
    description: 'Comfortable and stylish sofa for your living room.',
    reviews: ['The sofa is not only comfortable but also adds a touch of style to my living room. Love it!']
  }, // 3 - Living Room Furniture
  {
    name: 'Dog Food',
    price: 12.99,
    image: 'https://i.imgur.com/1CXWFkT.jpg',
    manufacturer: 'PetPal',
    description: 'Nutritious dog food for your furry friend.',
    reviews: ['My furry friend can\'t get enough of this nutritious dog food. It keeps them healthy and happy!']
  }, // 4 - Pet Food
  {
    name: 'Baby Diapers',
    price: 19.95,
    image: 'https://i.imgur.com/Y3fORfd.jpg',
    manufacturer: 'TinyTots',
    description: 'Soft and absorbent diapers for babies.',
    reviews: ['These diapers are soft and absorbent, perfect for my little one. No leaks!']
  }, // 5 - Diapers
  {
    name: 'T-Shirt',
    price: 9.99,
    image: 'https://i.imgur.com/b3M4Qt6.jpg',
    manufacturer: 'FashionFab',
    description: 'Casual and comfortable cotton T-shirt.',
    reviews: ['The T-shirt is comfortable and fits perfectly. Great for everyday wear!']
  }, // 6 - Casual Wear
  {
    name: 'Orange Juice',
    price: 3.49,
    image: 'https://i.imgur.com/q73irfP.jpg',
    manufacturer: 'JuicyCo',
    description: 'Freshly squeezed orange juice.',
    reviews: ['This orange juice is so fresh and delicious. Its a great way to start my mornings!']
  }, // 7 - Beverages
  {
    name: 'Toothpaste',
    price: 2.29,
    image: 'https://i.imgur.com/mNcvPIM.jpg',
    manufacturer: 'DentalCare',
    description: 'Fluoride toothpaste for strong teeth.',
    reviews: ['Ive been using this toothpaste for years. It keeps my teeth healthy and my breath fresh!']
  }, // 8 - Oral Care
  {
    name: 'Laptop',
    price: 799.0,
    image: 'https://i.imgur.com/XLmFnc6.jpg',
    manufacturer: 'TechGenius',
    description: 'Powerful laptop for work and entertainment.',
    reviews: ['This laptop is a beast! It handles all my tasks with ease, and gaming on it is fantastic!']
  }, // 9 - Computers
  {
    name: 'Coffee Table',
    price: 149.99,
    image: 'https://i.imgur.com/A28sBzC.jpg',
    manufacturer: 'FurnishHome',
    description: 'Elegant coffee table for your living room.',
    reviews: ['I love this coffee table. Its not only functional but also adds an elegant touch to my living room decor!']
  }, // 10 - Office Furniture
  {
    name: 'Cat Food',
    price: 8.75,
    image: 'https://i.imgur.com/0p5fAym.jpg',
    manufacturer: 'KittyCuisine',
    description: 'Delicious cat food for your feline companion.',
    reviews: ['My cat cant resist this cat food. Its their favorite meal!']
  }, // 11 - Pet Food
  {
    name: 'Baby Wipes',
    price: 6.99,
    image: 'https://i.imgur.com/LaogAUX.jpg',
    manufacturer: 'TinyTots',
    description: 'Gentle baby wipes for easy cleaning.',
    reviews: ['These baby wipes are so gentle on my babys skin. They make diaper changes a breeze!']
  }, // 12 - Wipes
  {
    name: 'Dress Shirt',
    price: 24.95,
    image: 'https://i.imgur.com/zaCOfM8.jpg',
    manufacturer: 'ElegantAttire',
    description: 'Formal dress shirt for special occasions.',
    reviews: ['The dress shirt is elegant and fits perfectly. Its my go-to for formal events!']
  }, // 13 - Formal Wear
  {
    name: 'Bananas',
    price: 1.49,
    image: 'https://i.imgur.com/mDlQQAz.jpg',
    manufacturer: 'TropicalHarvest',
    description: 'Sweet and nutritious bananas.',
    reviews: ['These bananas are always fresh and sweet. My kids love them as a snack!']
  }, // 14 - Fruit
  {
    name: 'Conditioner',
    price: 4.99,
    image: 'https://i.imgur.com/pLbDZpt.jpg',
    manufacturer: 'SilkyStrands',
    description: 'Smooth and hydrating hair conditioner.',
    reviews: ['This conditioner leaves my hair silky and smooth. I cant live without it!']
  }, // 15 - Hair Care
  {
    name: 'Tablet',
    price: 199.0,
    image: 'https://i.imgur.com/VmwOdk4.jpg',
    manufacturer: 'TechWonder',
    description: 'Versatile tablet for work and entertainment.',
    reviews: ['The tablet is versatile and lightweight. Its perfect for both work and entertainment!']
  }, // 16 - Tablets
  {
    name: 'Desk',
    price: 149.5,
    image: 'https://i.imgur.com/UUryCVh.jpg',
    manufacturer: 'StudySolutions',
    description: 'Functional desk for your home office.',
    reviews: ['I love this desk for my home office. It has plenty of space and helps me stay organized!']
  }, // 17 - Office Furniture
  {
    name: 'Cat Litter',
    price: 9.25,
    image: 'https://i.imgur.com/Zt9TPAK.jpg',
    manufacturer: 'KittyCuisine',
    description: 'Odor-absorbing cat litter for easy cleanup.',
    reviews: ['This cat litter really helps control odors. It makes cleaning the litter box a less smelly task!']
  }, // 18 - Pet Food
  {
    name: 'Baby Formula',
    price: 17.99,
    image: 'https://i.imgur.com/iiwHWYp.jpg',
    manufacturer: 'TinyTots',
    description: 'Nutrient-rich baby formula for infants.',
    reviews: ['This baby formula is great for my infant. It provides all the nutrients they need!']
  }, // 19 - Diapers
  {
    name: 'Jeans',
    price: 29.95,
    image: 'https://i.imgur.com/qJrW28A.jpg',
    manufacturer: 'DenimDeluxe',
    description: 'Classic denim jeans for everyday wear.',
    reviews: ['These jeans are so comfortable and durable. Theyre my favorite for casual wear!']
  }, // 20 - Casual Wear
  {
    name: 'Peaches',
    price: 3.29,
    image: 'https://i.imgur.com/2vvDInW.jpg',
    manufacturer: 'OrchardFresh',
    description: 'Juicy and flavorful peaches.',
    reviews: ['These peaches are incredibly juicy and flavorful. They make a delicious snack!']
  }, // 21 - Fruits
  {
    name: 'Deodorant',
    price: 3.75,
    image: 'https://i.imgur.com/1Mj9Dvf.jpg',
    manufacturer: 'FreshGlow',
    description: 'Long-lasting deodorant with a pleasant scent.',
    reviews: ['This deodorant keeps me fresh all day, and the scent is delightful!']
  }, // 22 - Antiperspirants
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://i.imgur.com/MnTUHX8.jpg',
    manufacturer: 'SonicSound',
    description: 'Compact Bluetooth speaker for wireless audio.',
    reviews: ['The Bluetooth speaker is compact and has excellent sound quality. I love it!']
  }, // 23 - Speakers
  {
    name: 'Cereal',
    price: 3.99,
    image: 'https://i.imgur.com/AIBZyBS.jpg',
    manufacturer: 'BreakfastDelight',
    description: 'Healthy breakfast cereal to kickstart your day.',
    reviews: ['This cereal is my go-to breakfast choice. It\'s healthy and delicious!']
  },
    {
      name: 'Running Shoes',
      price: 79.95,
      image: 'https://i.imgur.com/A1opWpA.jpg',
      manufacturer: 'SportyFit',
      description: 'Comfortable running shoes for your active lifestyle.',
      reviews: ['These running shoes are so comfortable, and they provide excellent support for my workouts.']
  }, // 25 - Footwear
  {
    name: 'Digital Camera',
    price: 299.0,
    image: 'https://i.imgur.com/JQCP7ZG.jpg',
    manufacturer: 'PhotoPro',
    description: 'High-quality digital camera for capturing memories.',
    reviews: ['This digital camera takes stunning photos and is perfect for photography enthusiasts!']
  }, // 26 - Electronics
  {
    name: 'Desk Chair',
    price: 149.99,
    image: 'https://i.imgur.com/WLOAzFs.jpg',
    manufacturer: 'ErgoComfort',
    description: 'Ergonomic desk chair for comfortable work hours.',
    reviews: ['This desk chair is so comfortable, and it supports my back during long work hours.']
  }, // 27 - Office Furniture
  {
    name: 'Fish Food',
    price: 5.99,
    image: 'https://i.imgur.com/xY4mDKh.jpg',
    manufacturer: 'AquaticLife',
    description: 'Nutritious fish food for your aquatic pets.',
    reviews: ['My fish love this food. It keeps them healthy and their colors vibrant!']
  }, // 28 - Pet Food
  {
    name: 'Sunscreen',
    price: 7.49,
    image: 'https://i.imgur.com/4dUSgvS.jpg',
    manufacturer: 'SunGuard',
    description: 'Effective sunscreen to protect your skin from UV rays.',
    reviews: ['I use this sunscreen whenever I go outdoors, and it provides great sun protection.']
  }, // 29 - Skin Care
  {
    name: 'Backpack',
    price: 39.95,
    image: 'https://i.imgur.com/keTBGIR.jpg',
    manufacturer: 'AdventureGear',
    description: 'Durable backpack for all your outdoor adventures.',
    reviews: ['This backpack is rugged and spacious, making it perfect for hiking and camping trips.']
  }, // 30 - Outdoor Gear
  {
    name: 'Wristwatch',
    price: 89.99,
    image: 'https://i.imgur.com/6HEtC86.jpg',
    manufacturer: 'TimeMaster',
    description: 'Stylish wristwatch to keep track of time in style.',
    reviews: ['I love this wristwatch. It\'s not only functional but also adds a touch of elegance to my outfits.']
  }, // 31 - Accessories
  {
    name: 'Yoga Mat',
    price: 19.99,
    image: 'https://i.imgur.com/QRZHKA7.jpg',
    manufacturer: 'ZenYoga',
    description: 'High-quality yoga mat for your daily practice.',
    reviews: ['This yoga mat is non-slip and comfortable, making my yoga sessions enjoyable.']
  }, // 32 - Fitness
  {
    name: 'Headphones',
    price: 49.99,
    image: 'https://i.imgur.com/wLoGYeS.jpg',
    manufacturer: 'SoundBliss',
    description: 'High-quality headphones for immersive audio experiences.',
    reviews: ['These headphones provide excellent sound quality, and I use them for both music and gaming.']
  },
  { // 33 - Audio
  name: 'Watermelon',
  price: 3.99,
  image: 'https://i.imgur.com/060S5uS.jpg', 
  manufacturer: 'FreshHarvest',
  description: 'Juicy and refreshing watermelon.',
  reviews: ['This watermelon is so refreshing on a hot day. Love it!']
}, // 34
{
  name: 'Canned Soda',
  price: 0.99,
  image: 'https://i.imgur.com/CiKIHQu.jpg', 
  manufacturer: 'SodaCo',
  description: 'Assorted canned sodas for a fizzy treat.',
  reviews: ['I always keep a variety of canned sodas in my fridge. Great for any occasion!']
}, // 35
{
  name: 'Body Wash',
  price: 4.49,
  image: 'https://i.imgur.com/Kmnvhm2.jpg', 
  manufacturer: 'CleanSplash',
  description: 'Invigorating body wash for a refreshing shower.',
  reviews: ['This body wash has a great scent and leaves my skin feeling fresh.']
}, // 36
{
  name: 'Toothbrush',
  price: 1.99,
  image: 'https://i.imgur.com/07QVf4P.jpg', 
  manufacturer: 'DentalCare',
  description: 'Soft-bristle toothbrush for effective cleaning.',
  reviews: ['My teeth feel so clean after using this toothbrush. Highly recommended!']
}, // 37
{
  name: 'Granola Bars',
  price: 2.49,
  image: 'https://i.imgur.com/9hPy4ql.jpg', 
  manufacturer: 'HealthyBites',
  description: 'Healthy and tasty granola bars for snacking.',
  reviews: ['These granola bars are my go-to snack. They\'re delicious and nutritious!']
}, // 38
{
  name: 'Conditioner MAX',
  price: 4.99,
  image: 'https://i.imgur.com/D3JmUMg.jpg', 
  manufacturer: 'SilkyStrands',
  description: 'Smooth and hydrating hair conditioner.',
  reviews: ['This conditioner leaves my hair silky and smooth. I can\'t live without it!']
}, // 39
{
  name: 'Canned Soup',
  price: 1.79,
  image: 'https://i.imgur.com/eMgk3Xc.jpg', 
  manufacturer: 'SoupDelight',
  description: 'Variety of canned soups for quick and easy meals.',
  reviews: ['These canned soups are a lifesaver on busy days. They taste homemade!']
}, // 40
{
  name: 'Face Wash',
  price: 3.29,
  image: 'https://i.imgur.com/CBzXhFv.jpg', 
  manufacturer: 'GlowSkin',
  description: 'Gentle face wash for a clean and radiant complexion.',
  reviews: ['My skin feels so fresh and clean after using this face wash. Highly recommended!']
}, // 41
{
  name: 'Desk Lamp',
  price: 19.99,
  image: 'https://i.imgur.com/oKb8wxH.jpg', 
  manufacturer: 'BrightLite',
  description: 'Adjustable desk lamp for focused work or study.',
  reviews: ['This desk lamp provides great lighting for my workspace. I love it!']
}, // 42
{
name: 'Android',
            price: 429.99,
            image: 'https://i.imgur.com/ip4C6Tb.jpg', // Empty string for the image
            manufacturer: 'Techtronics',
            description: 'High-end smartphone with advanced features.',
            reviews: ['This smartphone is amazing! It has all the advanced features I need.']
        }, // 43
        {
            name: 'Total',
            price: 499.99,
            image: 'https://i.imgur.com/7TcHmhl.jpg', // Empty string for the image
            manufacturer: 'Techtronics',
            description: 'Premium smartphone with top-notch specifications.',
            reviews: ['I upgraded to this smartphone, and it\'s a powerhouse. Superb performance!']
        }, // 44
        {
            name: 'Galaxy',
            price: 549.99,
            image: 'https://i.imgur.com/Va0mrOO.jpg', // Empty string for the image
            manufacturer: 'Techtronics',
            description: 'Flagship smartphone with the latest technology.',
            reviews: ['The best smartphone I\'ve ever owned. It\'s a technological marvel!']
        }, // 45
        {
            name: 'FlipPhone',
            price: 599.99,
            image: 'https://i.imgur.com/dkscZ5m.jpg', // Empty string for the image
            manufacturer: 'Techtronics',
            description: 'Ultra-premium smartphone for tech enthusiasts.',
            reviews: ['This smartphone is a beast! It surpasses all my expectations.']
        }, // 46
        {
          name: 'Gentle Touch',
          price: 16.49,
          image: 'https://i.imgur.com/CD93YCc.jpg',
          manufacturer: 'TinyTots',
          description: 'Soft and absorbent diapers for babies.',
          reviews: ['These diapers are so soft and absorbent. Perfect for my little one.']
        }, // 47 - Diapers
        
        {
          name: 'Special Delivery',
          price: 18.95,
          image: 'https://i.imgur.com/vDmUVtC.jpg',
          manufacturer: 'TinyTots',
          description: 'Premium baby diapers for ultimate comfort.',
          reviews: ['I love these premium diapers. They keep my baby comfortable all day.']
        }, // 48 - Diapers
        
        {
          name: 'Little Snuggers',
          price: 14.99,
          image: 'https://i.imgur.com/G2sCT3i.jpg',
          manufacturer: 'TinyTots',
          description: 'Eco-friendly diapers for a greener planet.',
          reviews: ['I appreciate using eco-friendly diapers. They work well and are better for the environment.']
        }, // 49 - Diapers
        
        {
          name: 'Swaddlers',
          price: 19.49,
          image: 'https://i.imgur.com/VjFpKdS.jpg',
          manufacturer: 'TinyTots',
          description: 'Hypoallergenic diapers for sensitive skin.',
          reviews: ['These hypoallergenic diapers are a lifesaver for my baby with sensitive skin. No irritations!']
        }, // 50 - Diapers
        
        {
          name: 'Cruisers',
          price: 15.99,
          image: 'https://i.imgur.com/5RqfWTw.jpg',
          manufacturer: 'TinyTots',
          description: 'Overnight diapers for a good night’s sleep.',
          reviews: ['The overnight diapers keep my baby dry all night. We both sleep soundly!']
        }, // 51 - Diapers
        {
          name: 'WaterWipes',
          price: 7.49,
          image: 'https://i.imgur.com/uXU2LZc.jpg',
          manufacturer: 'TinyTots',
          description: 'Gentle baby wipes for easy cleaning.',
          reviews: ['These baby wipes are so gentle on my baby’s skin. They make diaper changes a breeze!']
        }, // 52 - Wipes
        
        {
          name: 'Pamper Wipes',
          price: 6.99,
          image: 'https://i.imgur.com/ChsGDsA.jpg',
          manufacturer: 'TinyTots',
          description: 'Fragrance-free baby wipes for sensitive skin.',
          reviews: ['Fragrance-free baby wipes are perfect for my baby with sensitive skin. No irritation at all.']
        }, // 53 - Wipes
        
        {
          name: 'Mom Cozy',
          price: 8.25,
          image: 'https://i.imgur.com/cAlOyNS.jpg',
          manufacturer: 'TinyTots',
          description: 'Hypoallergenic baby wipes for extra care.',
          reviews: ['These hypoallergenic baby wipes are a must-have for my baby. They are super gentle.']
        }, // 54 - Wipes
        {
          name: 'Desktop Computer',
          price: 699.0,
          image: 'https://i.imgur.com/6y40qFA.jpg',
          manufacturer: 'TechGenius',
          description: 'Powerful desktop computer for home or office use.',
          reviews: ['This desktop computer is a workhorse. It handles all my tasks with ease.']
        }, // 55 - Computers
        
        {
          name: 'Gaming Laptop',
          price: 1299.0,
          image: 'https://i.imgur.com/OoYGuVF.jpg',
          manufacturer: 'GamerTech',
          description: 'High-performance gaming laptop for hardcore gamers.',
          reviews: ['This gaming laptop is a beast! It runs all my favorite games smoothly.']
        }, // 56 - Computers
        
        {
          name: 'Chromebook',
          price: 299.0,
          image: 'https://i.imgur.com/FKJ0JMz.jpg',
          manufacturer: 'TechGenius',
          description: 'Lightweight Chromebook for on-the-go productivity.',
          reviews: ['The Chromebook is perfect for my on-the-go lifestyle. It\'s fast and portable.']
        }, // 57 - Computers
        {
          name: 'Coffee Table Set',
          price: 499.99,
          image: 'https://i.imgur.com/vKoR236.jpg',
          manufacturer: 'FurnishHome',
          description: 'A complete coffee table set for your living room.',
          reviews: ['This coffee table set is a great addition to my living room. It comes with everything I need.']
        }, // 58 - Living Room Furniture
        
        {
          name: 'Recliner Chair',
          price: 399.0,
          image: 'https://i.imgur.com/qPNONt6.jpg',
          manufacturer: 'ComfyLiving',
          description: 'Comfortable recliner chair for relaxation.',
          reviews: ['The recliner chair is incredibly comfortable. Its my favorite spot in the living room.']
        }, // 59 - Living Room Furniture
        
        {
          name: 'Bookshelf',
          price: 149.0,
          image: 'https://i.imgur.com/Fc7J45s.jpg',
          manufacturer: 'FurnishHome',
          description: 'Stylish bookshelf for organizing your books and decor.',
          reviews: ['This bookshelf not only helps me stay organized but also adds a touch of style to my room.']
        }, // 60 - Living Room Furniture
        
        {
          name: 'TV Stand',
          price: 249.99,
          image: 'https://i.imgur.com/QK4Xzfg.jpg',
          manufacturer: 'ComfyLiving',
          description: 'Modern TV stand for your entertainment center.',
          reviews: ['The TV stand is sleek and functional. It perfectly holds my TV and other electronics.']
        }, // 61 - Living Room Furniture
        
        {
          name: 'Sofa Set',
          price: 899.0,
          image: 'https://i.imgur.com/wRlyoUU.jpg',
          manufacturer: 'ComfyLiving',
          description: 'Complete sofa set for ultimate comfort in your living room.',
          reviews: ['This sofa set is luxurious and comfortable. Its perfect for entertaining guests.']
        }, // 62 - Living Room Furniture
        {
          name: 'Android Tablet',
          price: 299.99,
          image: 'https://i.imgur.com/IKdMhJC.jpg',
          manufacturer: 'TechGenius',
          description: 'High-quality Android tablet for work and entertainment.',
          reviews: ['This Android tablet is versatile and user-friendly. Its great for both work and entertainment.']
        }, // 63 - Tablets
        
        {
          name: 'iPad Pro',
          price: 799.0,
          image: 'https://i.imgur.com/kvH0ouo.jpg',
          manufacturer: 'TechWonder',
          description: 'Powerful iPad Pro for professional tasks and creativity.',
          reviews: ['The iPad Pro is a powerhouse. It handles professional tasks and creative projects with ease.']
        }, // 64 - Tablets
        
        {
          name: 'Windows Tablet',
          price: 399.0,
          image: 'https://i.imgur.com/T2Axleg.jpg',
          manufacturer: 'TechGenius',
          description: 'Windows-powered tablet for productivity on the go.',
          reviews: ['This Windows tablet is perfect for productivity on the go. It runs all my essential apps seamlessly.']
        }, // 65 - Tablets
        {
          name: 'Navy Suit',
          price: 249.99,
          image: 'https://i.imgur.com/Y4R6ZMw.jpg',
          manufacturer: 'ElegantAttire',
          description: 'Classic black suit for formal occasions.',
          reviews: ['This black suit is timeless and elegant. Its my go-to choice for formal events.']
        }, // 66 - Formal Wear
        
        {
          name: 'Evening Gown',
          price: 299.0,
          image: 'https://i.imgur.com/XPBXsRM.jpg',
          manufacturer: 'ElegantAttire',
          description: 'Elegant evening gown for special occasions.',
          reviews: ['The evening gown is stunning and fits like a dream. Its perfect for formal parties and events.']
        }, // 67 - Formal Wear
        
        {
          name: 'Tuxedo Set',
          price: 349.0,
          image: 'https://i.imgur.com/Txmpp1a.jpg',
          manufacturer: 'ElegantAttire',
          description: 'Complete tuxedo set for a dapper look.',
          reviews: ['This tuxedo set is the epitome of sophistication. Its ideal for weddings and upscale events.']
        } // 68 - Formal Wear
	]);
  
	const subcategories = await SubCategory.create([
		{ name: 'Fruits', products: [products[0]._id, products[14]._id, products[21]._id, products[34]._id]	}, // Groceries - 0
		{ name: 'Hair Care', products: [products[1]._id,products[39]._id, products[15]._id] }, // Personal Care - 1
		{ name: 'Mobile Phones', products: [products[2]._id,products[44]._id, products[45]._id, products[46]._id] }, // Electronics - 2
		{ name: 'Living Room Furniture',products: [products[3]._id, products[58]._id, products[59]._id, products[60]._id, products[61]._id, products[62]._id] }, // Home Furniture - 3
		{ name: 'Pet Food', products: [products[4]._id, products[11]._id, products[28]._id]	}, // Pets - 4
		{ name: 'Diapers', products: [products[5]._id, products[19]._id, products[47]._id, products[48]._id, products[49]._id, products[50]._id, products[51]._id ]}, // Baby - 5
		{ name: 'Casual Wear', products: [products[6]._id,products[30]._id, products[20]._id, products[25]._id ]}, // Clothing - 6
		{ name: 'Breakfast, Food & Beverages', products: [products[35]._id,products[40]._id,products[38]._id,products[7]._id, products[24]._id] }, // Groceries - 7
		{ name: 'Skin & Oral Care', products: [products[8]._id,products[37]._id,products[41]._id, products[36]._id, products[29]._id] }, // Personal Care - 8
		{ name: 'Computers & Cameras', products: [products[9]._id, products[26]._id] }, // Electronics - 9
		{ name: 'Tablets', products: [products[16]._id, products[65]._id, products[64]._id, products[63]._id] }, // Electronics - 10
		{ name: 'Wipes', products: [products[12]._id, products[52]._id, products[53]._id, products[54]._id   ] }, // Baby - 11
		{ name: 'Formal Wear', products: [products[13]._id, products[31]._id, products[68]._id, products[67]._id, products[66]._id ] }, // Clothing - 12
		{ name: 'Office Furniture', products: [products[10]._id, products[17]._id, products[27]._id, products[42]._id] }, // Home Furniture - 13
		{ name: 'Antiperspirants & Fitness', products: [products[22]._id, products[32]._id] }, // Personal Care - 14
		{ name: 'Speakers', products: [products[23]._id, products[33]._id ]} // Electronics - 15
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

