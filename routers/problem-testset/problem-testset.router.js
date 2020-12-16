const express = require('express')
const router = express.Router()
const problemTestsetController = require('./../../controllers/problem-testset/problem-testset.controller')

router.get('/hello', problemTestsetController.hello)

module.exports = router
