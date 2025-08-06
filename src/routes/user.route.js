const express = require('express')
const route = express.Router()
const userController = require('../controllers/user.controller')

route.get('/users',userController.list)
route.get('/users/:id',userController.show)
route.post('/users',userController.create)
route.put('/users/:id',userController.update)
route.delete('/users/:id',userController.delete)

module.exports = route
