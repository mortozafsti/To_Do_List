// Basic
const express = require('express');
const router = require('./src/routes/api');
const app=new express();
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

//Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())


//Body-Parser Implement
app.use(bodyParser.json())

//Request Rate Limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

// MongoDB Database Connection

let uri = "mongodb+srv://ahmedmortoza:Mongodbatlas%40123@cluster0.sufjjry.mongodb.net/Todo"
let OPTION = {user:'',pass:'',autoIndex:true}
mongoose.connect(uri,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
})

// Routing implement
app.use("/api/v1",router)

// Undefined Route implement
app.use("*",(req,res)=>{
    res.status(400).json({status:"Fail",data:"Not Found"})
})

module.exports=app;
