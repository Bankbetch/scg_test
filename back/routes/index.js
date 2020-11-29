const router = require('express').Router()
const config = require('../configs/app')

router.use(`/api/v${config.apiVersion}/doscg`, require('./api/v1'))

module.exports = router