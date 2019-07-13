const Project = require('../models/project.model')
module.exports = {
    index: (req,res,next)=>{
        // res.status(200).json({
            // message:'you requested index project page design'
        // });
        Project.find({})
        .then(projects=>{
            // console.log(projects);
            res.status(200).json(projects)
        })
        .catch(err=>{
            next(err);
        })
    },
    newProject:(req,res,next)=>{
        const newProject = new Project(req.body);
        //doi save song thi lam viec trong then sau do catch
        newProject.save()
            .then(project=>{
                console.log(project)
                // res.status(201).json(project);
            })
            .catch(err =>{
                next(err);
            });
    },
}