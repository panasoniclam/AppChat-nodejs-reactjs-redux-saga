const LamNN = require('../models/model.lamnn');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../helpers/helper.config')
module.exports = {
   findAll:(req,res,next)=>{
       LamNN.find({})
       .then(users =>{
           res.status(200).json(users)
           console.log(users)
       })
       .catch(err=>{
           next(err)
       })
   },
   register:(req,res,next)=>{
       //validate requested
       if(!req.body.username){
           return res.status(400).send({
               message:'user info contend can not be empty'
           })
       }
       //create user
       const user = new LamNN({
           username:req.body.username,
           password:req.body.password,
           email:req.body.email
       })
       user.password = bcrypt.hashSync(req.body.password,10)
       user.save()
       .then(user=>{
           res.send(user)
           console.log(user)
       })
       .catch(err=>{
           res.status(500).send({
               message:err.message
           })
       })
   },
   login:(req,res,next)=>{
       const username = req.body.username;
       const password = req.body.password;
       console.log( req.body.password)
       LamNN.findOne({username:username},
        (err,user)=>{
            if(!user){
                res.json({err:'user is not exist'})
            }
            else if(user ){
                let payload = {username:user.username} ;
                let jwtToken = jwt.sign(payload,config.jwtSecret,{expiresIn:1*30});
                console.log('jwtToken'+jwtToken)
                const jsonResponse = {'access_token':jwtToken,'refresh_token':"xxxxx-xxx-xx-x"}
                res.json(jsonResponse)
            }
            else{
                res.json({error:'loggin error'})
            }
        }
        )
    // LamNN.find({email: req.body.username, password: req.body.password}, (err, user) => {
	// 	if (err) res.status(500).send({message: err.message});
	// 	if (user) {
	// 		user.comparePassword(req.body.password, function (err, isMatch) {
	// 			if (err) res.status(500).send({message: err.message});
	// 			if (!isMatch) {
	// 				return res.status(401).send({msg: 'Invalid email or password'});
	// 			}
	// 			res.send({
	// 				token: generateToken(user),
	// 				user: user.toJSON()
	// 			});
	// 		});
	// 	}
    // });
//     const username = req.body.username;
// 	const password = req.body.password;

// 	LamNN
// 		.findOne({email: req.body.username})
// 		.exec((err, userExists) => {
// 			if(userExists) return res.status(401).send('User Already Exists.');
// 			user.save((err, user) => {
// 				if(err) res.status(500).send({ message: err.message });
// 				console.log('User with ' + user.email + ' is saved.');
// 				res.status(200).send({
// 					token: generateToken(user),
// 					user: user.toJSON()
// 				})
// 			});
// 		});
//    }

    }}