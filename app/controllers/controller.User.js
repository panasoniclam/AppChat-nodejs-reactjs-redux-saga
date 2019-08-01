 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('./../helpers/helper.config')
 
const UserJWT = require('../models/model.User')
module.exports={
    find:(req,res,next)=>{
        console.log("lam",req.body.hash_passwd)
        UserJWT.find({})
        .then(user=>{
            console.log(user)
            res.status(200).json(user)
        })
        .catch(err=>{
            next(err)
        })
    },
    index:(req,res,next)=>{
        res.send("ajojiji")
        
    },
    register:(req,res,next)=>{

         console.log(req.boby.username);
        if(!req.body.username){
            return res.status(400).send({
                message:'user contend can not be empty'
            });
        }  
         
         const user= new UserJWT({
             usernamea:req.boby.username,
             hash_passwd:req.boby.hash_passwd,
             email:req.body.email,
             created_date:req.body.created_date,
             first_name:req.boby.first_name,
             birth_date:req.boby.birth_date,
             gender:req.body.gender,
             avatar:req.body.avatar
         })
       
        user.hash_password = bcrypt.hashSync(req.body.password, 10);
         //save 
         usera.save(user)
         .then(users=>{
             res.send(users)
             console.log(users)
         })
         .catch(err=>{
             res.status(500).send({
                 message:err.message
             })
         })
    },

   // login
    login:(req,res,next)=>{
    
        var username = req.body.username;
        var password = req.body.password;
        
        User.findOne({username:username},
            (err,user)=>{
                if(!user){
                    res.json({ error : 'User is not exist'})
                } else if(user && user.comparePassword(password)){
                    let payload = {username:user.username};
                    let jwtToken = jwt.sign(payload,config.jwtSecret, { expiresIn: 1 * 30 });
                    console.log('jwtToken: ' + jwtToken);
                    var jsonResponse = {'access_token': jwtToken, 'refresh_token': "xxxxx-xxx-xx-x"}
                    res.json(jsonResponse)
                }else {
                     res.json({ error : 'Login Error'})
                     }
            })
    }
}