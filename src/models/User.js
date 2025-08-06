const { DataTypes } = require('sequelize')
const db = require('../database/index')

const User = db.define('User',{
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
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},{
    modelName:'User',
    timestamps:true
})

module.exports = User
