const express =require('express');
const route = express.Router();
const User = require('../controllers/controller.User')
const AuthJWT = require('../controllers/controller.auth');
route.route('/findall')
    .get(User.find) 
    .post(User.register)
// route.route('/register')
   
route.route('/ahihi')
    .get(User.index)
route.route('/login')
    .post(User.login)

// route.route('/logout')
//     .post(AuthJWT.isAuthenticated,AuthJWT.user)
module.exports = route