const express = require('express')
const router  =  express.Router()
const getData = require('./get')
const postData = require('./post')
const patchData = require('./patch')


router.use('/get',getData)
router.use('/post',postData)
router.use('/patch',patchData)

module.exports = router;
