const express = require('express')
const route = express.Router()
const authController = require('../controllers/auth.controller')

route.post('/login',authController.login)
route.post('/logout',authController.logout)

module.exports = route
