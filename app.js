const express = require('express');
// import express from 'express'
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()
mongoose.connect(
     process.env.DATABASE_URL,
    {
        useNewUrlParser:true
    },
    ()=>console.log('connect congr')
)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:'you requested home page'
//     })
// });

const project = require('./app/routes/project.route');
const userJWT = require('./app/routes/route.User');
const LamNN = require('./app/routes/route.lamnn')
// const PerUser = require('./app/models/model.persiting')
app.use('/user',userJWT);
app.use('/projects',project);
app.use('/Test',LamNN);
// app.use('/Lam',PerUser);
app.use((req,res,next)=>{
    const err =  Error('not found');
    err.status = 404;
    next(err);
})
app.use((req,res,next)=>{
    const err = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    res.status(status).json({
        message:err.message
    })
})


module.exports = app;