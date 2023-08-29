const Review = require('../../models/review')

module.exports = {
    createReview,
    deleteReview,
    getReviewsByProduct,
}

async function createReview(req, res){
    try {
        const {name, rating} = req.body;
        const productId = req.params.productId;
        const userId = res.locals.data.user._id
        const review = new Review({
            name:name || 'Anonymous',
            rating:rating,
            product:productId,
            user:userId

        })
        await review.save()
        res.status(201).json(review)
    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}

async function deleteReview(req, res){
    try {
        const reviewId = req.params.reviewId;
        const userId = res.locals.data.user._id

        const review = await Review.findOne({ _id:reviewId, user:userId })
        if(!review){
            return res.status(404).json({ message:'Review not found or you are not authorized to delete this review' })
        }
        await review.remove()
        res.status(204).json({ message:'deleted review' })

    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}

async function getReviewsByProduct(req, res){
    try {
        const productId = req.params.productId;
        const reviews = await Review.find({ product:productId }).exec();
        res.status(200).json(reviews)

    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}