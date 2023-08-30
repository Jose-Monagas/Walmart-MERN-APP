const express = require('express');
const router = express.Router();
const membershipCtrl = require('../../controllers/api/memberships');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api/membership

router.post('/', ensureLoggedIn, membershipCtrl.signUp);
router.put('/unsubscribe', ensureLoggedIn, membershipCtrl.unsubscribe);

module.exports = router;
