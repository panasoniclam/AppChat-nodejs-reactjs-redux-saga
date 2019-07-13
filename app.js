
//define dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
const app = express(); 
// connect to db
mongoose.connect(
    'mongodb+srv://admin:' + process.env.MONGOOSE_PASS+'@cluster0-nh64w.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
    }
);
//import file roiuter config ./app/router
const projects = require('./app/routes/project.route');


//middleware

//set up morgan
app.use(logger('dev'));
//contend
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//route
// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:'you requset homepage'
//     });
// });
app.use('/projects',projects);
//catch 404 errors and forward them to error handle
app.use((req,res,next)=>{
    const err = new Error('NOt found!');
    err.status = 404 ;
    next(err);
})
//error hanldler funtion
app.use((req,res,next)=>{
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //respons to client
    res.status(status).json({
        error:{
            message:error.message
        }
    }) ;
});
//module export
module.exports =app;