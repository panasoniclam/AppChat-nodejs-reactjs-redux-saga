// import dependiences
const express = require('express');
const router = express.Router();


const ProjectsController = require('../controllers/project.controler');
//contend
//note : not localhost 8080 / true localhost:8080/projects/
router.route('/')
    // .get((req,res,next)=>{
    //     res.status(200).json({
    //         message:'you requested index project page'
    //     })
    // })
     .get(ProjectsController.index)
     .post(ProjectsController.newProject);


//export module

module.exports = router;