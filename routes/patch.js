const express = require('express');
const router =    express.Router();
const {patchData}= require('../controllers')

router.patch('/data/:loveid',patchData.patch)

module.exports = router;
