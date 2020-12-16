const express = require('express')
const router = express.Router()
const accountController = require('./../../controllers/account/account.controller')

router.get('/hello', accountController.hello)

module.exports = router
