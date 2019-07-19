const express = require('express');
const route = express.Router();
const Project = require('../controllers/project.controller')
const Note = require('../controllers/note.controller')
route.route('/')
    .get(Project.index)
    .post(Project.newProject);
    
route.route('/note')
    //  .post(Project.nodeCreate)
    // .get(Project.nodeCreate)
    .get(Note.index)
    .post(Note.create)
module.exports = route;