const express = require('express')
const route = express.Router()
const userController = require('../controllers/user.controller')
const jwtAuth = require('../services/security/services.security.auth-permissions')

route.get('/users', jwtAuth.checkIsAdmin, userController.list)
route.get('/users/:id', jwtAuth.checkIsAdmin,userController.show)
route.post('/users', jwtAuth.checkIsAdmin, userController.create)
route.put('/users/:id', jwtAuth.checkIsAdmin, userController.update)
route.delete('/users/:id', jwtAuth.checkIsAdmin, userController.delete)

module.exports = route
