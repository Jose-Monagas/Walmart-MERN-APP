const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api/reviews/products/:productId
router.post('/products/:productId', ensureLoggedIn, reviewsCtrl.createReview);

//DELETE /api/reviews/:reviewId
router.delete('/remove/:reviewId', ensureLoggedIn, reviewsCtrl.deleteReview);

//GET /api/reviews/products:productId
router.get('/products/:productId', reviewsCtrl.getReviewsByProduct);

module.exports = router;
