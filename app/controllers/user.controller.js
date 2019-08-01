const User = require('./../models/user.model');
const bcrypt = require('bcrypt');
const config = require('./../helpers/helper.config')
const jwt = require('jsonwebtoken')
module.exports = {
    findAllUser:(req,res,next)=>{
        User.find({})
        .then(users=>{
            res.status(200).json(users)
            console.log(users)
        })
        .catch(err=>{
            next(err)
        })
    },
    createUser:(req,res,next)=>{
        //validati request
        if(!req.body.name){
            return res.status(400).send({
                message:'uner info contend can not be empty'
            })
        }
        //create user
        const user = new User({
            name:req.body.name,
            password:req.body.password,
            nemberId:req.body.n.dataCreate,
            jobTitle:req.body.jemberId,
            dateCreate:req.bodyobTitle,
            salaries:req.body.salaries
        })
        user.password = bcrypt.hashSync(req.body.password,10)
        user.save()
        .then(user=>{
            console.log(user)
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message
            })
        })
    },
    login:(req,res,next)=>{
        var username = req.body.name;
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
    },
    findOneUser:(req,res,next)=>{
        User.findById(req.params.userId)
        .then(user=>{
            if(!user){
                return res.status(404).send({
                    message:'user not found with id'+req.params.userId
                })
            }
            res.send(user)
        })
         .catch(err=>{
             if(err.kind == 'ObjectId'){
                 return res.status(404).send({
                     message:'User not found with id'+req.params.userId
                 })
             }
             return res.status(500).send({
                 message:'error retrieving user with id'+req.params.userId
             })
         })
    },
    updateUser:(req,res,next)=>{
        //validate requested
        if(!req.body.name){
            return res.status(400).send({
                message:'User contend can be not empty'
            })
        }
        User.findByIdAndUpdate(req.params.userId,{
            name:req.body.name,
            nemberId:req.body.nemberId,
            dateCreate:req.body.dataCreate,
            jobTitle:req.body.jobTitle,
            salaries:req.body.salaries
        },{new:true})
        .then(user=>{
            if(!user){
                return res.status(404).send({
                    message:'User not found with id'+req.params.userId
                })
            }
        })
        .catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message:'User not found id'+req.params.userId
                })
            }
        })
    },
    deleteUser:(req,res,next)=>{
        User.findByIdAndRemove(req.params.userId)
        .then(user=>{
            if(!user){
                return res.status(404).send({
                    message:'User not found with '+req.params.userId
                })
            }
            res.send({
                message:'User deleted successful !'
            })
        })
    }
   
}