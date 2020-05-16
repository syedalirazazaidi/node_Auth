const express =require('express')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app=express()
require('dotenv').config()
mongoose.connect(process.env.DATABASE_CLOUD, { useUnifiedTopology: true ,useNewUrlParser: true })
.then(()=>console.log('mongo dbconnected'))
.catch(err=>{
    console.log(err)
})
const authRoutes=require("./routes/auth")
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors({origin:process.env.CLINT_URL}))
app.use('/api',authRoutes)
const port =process.env.PORT ||8000
app.listen(port,()=>{
    console.log('server is learning',port)
})