const express = require('express');
const router =    express.Router();
const {getData}= require('../controllers')

router.get('/data',getData.get)

module.exports = router;
