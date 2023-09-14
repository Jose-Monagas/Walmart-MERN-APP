const Product = require('../../models/product');
const SubCategory = require('../../models/subCategory');
module.exports = {
	index,
	show,
	allProducts
};
//searching subcategory and then sending back the products array
async function index(req, res) {
	try {
		const subcategoryId = req.params.subcategoryId;
		const subcategory = await SubCategory.findById(subcategoryId)
			.populate('products')
			.exec();

		if (!subcategory) {
			return res.status(404).json({ message: 'Subcategory not found' });
		}
		res.status(200).json(subcategory.products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function show(req, res) {
	try {
		const productId = req.params.productId;
		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function allProducts(req, res) {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

//front end can do?
// async function productRating(req, res) {
// 	try {
// 		const product = await Product.findById(req.params.id)
// 			.populate('reviews')
// 			.exec();

// 		if (!product) {
// 			return res.status(404).json({ message: 'Product not found' });
// 		}
// 		const productReviews = product.reviews;
// 		if (productReviews.length === 0) {
// 			return res.status(200).json({ averageRating: 0 });
// 		}

// 		const sumOfRatings = productReviews.reduce(
// 			(sum, review) => sum + review.rating,
// 			0
// 		);
// 		const averageRating = sumOfRatings / productReviews.length;
// 		res.status(200).json({ averageRating });
// 	} catch (error) {
// 		res.status(500).json({ message: 'An error occcurred' });
// 	}
// }
