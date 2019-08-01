const express = require('express');
const route = express.Router();


const Project = require('../controllers/project.controller')
const Note = require('../controllers/note.controller')
const User = require('./../controllers/user.controller')



// const UserJWT = require('./../controllers/controller.User');
// const AuthJWT = require('../controllers/controller.auth');
 
route.route('/')
    .get(Project.index)
    .post(Project.newProject);
    
route.route('/note')
    //  .post(Project.nodeCreate)
    // .get(Project.nodeCreate)
    .get(Note.findAll)
    .post(Note.create)
route.route('/note/:noteId')
    .get(Note.findOne)
    .put(Note.update)
    .delete(Note.delete)

route.route('/user')
    .get(User.findAllUser)
    .post(User.createUser)
route.route('/user/login')
    .post(User.login)
route.route('/user/:userId')
     .get(User.findOneUser)
     .put(User.updateUser)
     .delete(User.deleteUser)

// route.route('/register')
//     .post(UserJWT.register)
// route.route('/login')
//     .post(UserJWT.login)
// route.route('/logout')
//     .get(AuthJWT.isAuthenticated,AuthJWT.user)
module.exports = route;