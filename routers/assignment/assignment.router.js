const express = require('express')
const router = express.Router()
const assignmentController = require('./../../controllers/assignment/assignment.controller')

router.get('/hello', assignmentController.hello)

module.exports = router
