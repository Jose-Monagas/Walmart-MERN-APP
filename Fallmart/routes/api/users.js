const express = require('express');
const router = express.Router();
const {
	checkToken,
	dataController,
	apiController
} = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', dataController.create, apiController.auth);
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth);
// PUT /api/users/update
router.put('/update', ensureLoggedIn, dataController.updateUser);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);

module.exports = router;
