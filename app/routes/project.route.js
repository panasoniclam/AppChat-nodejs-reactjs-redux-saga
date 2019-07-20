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
    .get(Note.findAll)
    .post(Note.create)
route.route('/note/:noteId')
    .get(Note.findOne)
module.exports = route;