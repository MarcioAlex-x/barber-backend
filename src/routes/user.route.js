const express = require('express')
const route = express.Router()
const userController = require('../controllers/user.controller')
const jwtAuth = require('../services/security/services.security.auth-permissions')

route.get('/users', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.list)
route.get('/users/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin],userController.show)
route.post('/users', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.create)
route.put('/users/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.update)
route.delete('/users/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.delete)

module.exports = route
