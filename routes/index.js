const express = require('express')
const router  =  express.Router()
const getData = require('./get')
const postData = require('./post')


router.use('/get',getData)
router.use('/post',postData)

module.exports = router;
