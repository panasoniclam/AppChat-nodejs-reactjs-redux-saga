const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()
mongoose.connect(
    'mongodb+srv://admin:'+process.env.PASS+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true
    }
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
app.use('/projects',project);
app.use((req,res,next)=>{
    const err = new Error('not found');
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