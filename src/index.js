require('dotenv').config()
const express = require('express')
const conn = require('./database/index')
const app = express()

const userRoute = require('./routes/user.route')
const serviceRoute = require('./routes/service.route')

PORT = process.env.PORT
DB_HOST = process.env.DB_HOST

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api',(req,res)=>{
    res.json({message:'This app is ON.'})
})
app.use(userRoute)
app.use(serviceRoute)

conn.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('http://localhost:3000')
        })
    })
    .catch(err=>{
        console.log(err)
    })
