const express = require('express')
const route = express.Router()

const serviceController = require('../controllers/service.controller')
const jwtPermitions = require('../services/security/services.security.auth-permissions')

route.get('/',serviceController.list)
route.get('/:id',serviceController.show)
route.post('/', [jwtPermitions.verifyToken, jwtPermitions.checkIsAdmin], serviceController.create)
route.put('/:id', [jwtPermitions.verifyToken, jwtPermitions.checkIsAdmin], serviceController.update)
route.delete('/:id', [jwtPermitions.verifyToken, jwtPermitions.checkIsAdmin], serviceController.delete)

module.exports = route
