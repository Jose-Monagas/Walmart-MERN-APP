const express = require('express');
const router = express.Router();
const deptCtrl = require('../../controllers/api/department');

// GET /api/department/showAlldepts
router.get('/showAlldepts', deptCtrl.index);
// GET /api/department/showAdept
router.get('/showAdept', deptCtrl.show);


module.exports = router;