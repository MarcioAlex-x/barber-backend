const express = require('express')
const route = express.Router()

const serviceController = require('../controllers/service.controller')

route.get('/services',serviceController.list)
route.get('/services/:id',serviceController.show)
route.post('/services',serviceController.create)
route.put('/services/:id',serviceController.update)
route.delete('/services/:id',serviceController.delete)

module.exports = route
