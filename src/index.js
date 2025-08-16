require('dotenv').config()
const express = require('express')
const conn = require('./database/index')
const app = express()
const cors = require('cors')

const userRoute = require('./routes/user.route')
const serviceRoute = require('./routes/service.route')
const authRoute = require('./routes/auth.route')

PORT = process.env.PORT
DB_HOST = process.env.DB_HOST

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api',(req,res)=>{
    res.json({message:'This app is ON.'})
})
app.use(userRoute)
app.use(serviceRoute)
app.use(authRoute)

conn.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('http://localhost:3001')
        })
    })
    .catch(err=>{
        console.log(err)
    })
