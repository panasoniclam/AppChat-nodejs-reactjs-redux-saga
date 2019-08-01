const User = require('../models/model.User');
const config = require('../helpers/helper.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {

    isAuthenticated:(req,res,next)=>{
    if(res.headers && req.header.authorization && 
        req.headers.authorization.split('')[0] === 'JWT'){
            const jwToken = req.headers.authorization.split(' ')[1];
            jwt.verify(jwToken,config.jwtSecret,(err,payload)=>{
                if(err){
                    res.status(401).json({message:'not found'});
                }else{
                    console.log('decoder'+payload.username);
                    User.findOne({
                        'username':payload.username
                    },(err,user)=>{
                        if(user){
                            req.user = user;
                            next()
                        }else{
                            res.status(401).json({
                                message:'not found'
                            })
                        }
                    })
                }
            })
        }
   },
   user:(req,res,next)=>{
    User.find({})
        .then(users=>{
            res.send(users)
            console.log(users)
        })
        .catch(err=>{
            res.send({
                message:err.message
            })
        })
   }
}