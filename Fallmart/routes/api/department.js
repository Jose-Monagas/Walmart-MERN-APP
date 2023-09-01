const express = require('express');
const router = express.Router();
const deptCtrl = require('../../controllers/api/departments');

// GET /api/department/showAlldepts
router.get('/showdepts', deptCtrl.index);
// GET /api/department/showAdept
//router.get('/showdept', deptCtrl.show);

module.exports = router;
