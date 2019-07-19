const Project = require('./../models/project.models')
const Note = require('./../models/note.model')
module.exports = {
    index:(req,res,next)=>{
        Project.find({})
            .then(project=>{
                console.log(project)
                res.status(200).json(project)
            })
            .catch(err=>{
                next(err);
            })
    },
    
    newProject:(req,res,next)=>{
        const newproject = new Project
        newproject.save()
            .then(project=>{
                console.log(project)
                res.status(201).json(project)
            })
            .catch(err=>{
                next(err)
            })
    },

    //Note
    // nodeCreate:(req,res,next)=>{
    //     // xac thuc requedt  validate request  
    //     const note = new Note({
    //         title:req.body.title || 'Untitled Note',
    //         contend:req.body.contend
    //     });
    //     Note.find({})
    //         .then(project=>{
    //             console.log(project)
    //             res.status(200).json(project)
    //         })
    //         .catch(err=>{
    //             next(err);
    //         })


    //     if(!req.body.contend){
    //         return res.status(400).send({
    //             message:'note contend can not emtry'
    //         })
    //     }
    //     //create a note
    //     //save Note in the db
    //     note.save()
    //         .then(data=>{
    //             res.send(data)
    //         })
    //         .catch(err=>{
    //             res.status(500).send({
    //                 message:err.message || 'some error occurred while create the Note'
    //             })
    //         })

    // }
    
}