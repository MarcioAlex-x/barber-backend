const User = require('./User')
const Service = require('./Service')

Service.belongsTo('User')
User.hasMany('Service')
