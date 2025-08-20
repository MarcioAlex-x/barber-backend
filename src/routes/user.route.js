const express = require('express')
const route = express.Router()
const userController = require('../controllers/user.controller')
const jwtAuth = require('../services/security/services.security.auth-permissions')

route.get('/', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.list)
route.get('/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin],userController.show)
route.post('/', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.create)
route.put('/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.update)
route.delete('/:id', [jwtAuth.verifyToken, jwtAuth.checkIsAdmin], userController.delete)

module.exports = route
