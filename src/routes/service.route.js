const express = require('express')
const route = express.Router()

const serviceController = require('../controllers/service.controller')
const jwtPermitions = require('../services/security/services.security.auth-permissions')

route.get('/services',serviceController.list)
route.get('/services/:id',serviceController.show)
route.post('/services', jwtPermitions.checkIsAdmin, serviceController.create)
route.put('/services/:id', jwtPermitions.checkIsAdmin, serviceController.update)
route.delete('/services/:id', jwtPermitions.checkIsAdmin, serviceController.delete)

module.exports = route
