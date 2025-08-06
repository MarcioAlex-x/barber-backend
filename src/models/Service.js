const { DataTypes } = require('sequelize')
const db = require('../database/index')

const Service = db.define('Service',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL(8,2),
        allowNull:false
    }
},{
    modelName:'Service',
    timestamps:true
})

module.exports = Service
