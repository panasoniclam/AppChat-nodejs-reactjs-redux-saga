//import defendences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
//contend
const app = express();
//set up bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//set up morgan
app.use(logger('dev'));
//set up route
app.get('/',(req,res,next)=>{
    res.send("ahihihiih")
})
//catch 404 err forward them to err
app.use((req,res,next)=>{
    const err = new Error('not found');
    err.status = 404;
    next(err)
})
//error handle function
app.use((req,res,next)=>{
    const err = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    res.status(status).json({
        message:err.message
    })
})
//exzprt module
module.exports = app