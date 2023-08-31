const Product = require('../../models/product');

module.exports = {
	index,
	show
};

async function index(req, res) {
	try {
		const products = await Product.find({})
			.sort('name')
			.populate('department')
			.exec();
		products.sort((a, b) => a.department.sortOrder - b.department.sortOrder);
		res.status(200).json(products);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

async function show(req, res) {
	try {
		const product = await Product.findById(req.params.id)
			.populate('department')
			.exec();
		res.status(200).json(product);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
}

//front end can do?
async function productRating(req, res) {
	try {
		const product = await Product.findById(req.params.id)
			.populate('reviews')
			.exec();

		if (!product) {
			return res.status(404).json({ message: 'Product not found' });
		}
		const productReviews = product.reviews;
		if (productReviews.length === 0) {
			return res.status(200).json({ averageRating: 0 });
		}

		const sumOfRatings = productReviews.reduce(
			(sum, review) => sum + review.rating,
			0
		);
		const averageRating = sumOfRatings / productReviews.length;
		res.status(200).json({ averageRating });
	} catch (error) {
		res.status(500).json({ message: 'An error occcurred' });
	}
}
