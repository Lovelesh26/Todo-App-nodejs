const express = require('express');
const router =    express.Router();
const {postData}= require('../controllers')

router.post('/data',postData.post)

module.exports = router;
