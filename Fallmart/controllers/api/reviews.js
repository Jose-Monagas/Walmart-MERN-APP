const Review = require('../../models/review');
const Product = require('../../models/product');
module.exports = {
	createReview,
	deleteReview,
	getReviewsByProduct
};

async function createReview(req, res) {
	try {
		const { name, rating, comment } = req.body;
		const productId = req.params.productId;
		const userId = req.user._id;
		const review = new Review({
			name: name || 'Anonymous',
			rating: rating,
			product: productId,
			user: userId,
			comment: comment
		});
		await review.save();
		const product = await Product.findOne({ _id: productId });
		product.reviews.push(review._id);
		await product.save();
		res.status(201).json(review);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function deleteReview(req, res) {
	try {
		const reviewId = req.params.reviewId;
		const userId = req.user._id;

		const review = await Review.findOne({ _id: reviewId, user: userId });
		if (!review) {
			return res.status(404).json({
				message:
					'Review not found or you are not authorized to delete this review'
			});
		}
		console.log(review);

		const product = await Product.findOneAndUpdate(
			{ reviews: review._id },
			{ $pull: { reviews: review._id } }
		);
		if (product) {
			await Review.deleteOne({ _id: review._id });
			res
				.status(204)
				.json({ message: 'Deleted review and removed from product' });
		} else {
			res.status(404).json({ message: 'Product with review not found' });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}

async function getReviewsByProduct(req, res) {
	try {
		const productId = req.params.productId;
		const reviews = await Review.find({ product: productId }).exec();
		res.status(200).json(reviews);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}
