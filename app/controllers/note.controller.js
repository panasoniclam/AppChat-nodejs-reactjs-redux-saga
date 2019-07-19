const Note = require('./../models/note.model')
module.exports = {
    //create  note and save note
    index:(req,res,next)=>{
        Note.find({})
        .then(project=>{
            console.log(project)
            res.status(200).json(project)
        })
        .catch(err=>{
            next(err);
        })
    },
    create:(req,res,next)=>{
        //validate request
        if(!req.body.contend){
            return res.status(400).send({
                message:'Note contend can not be empty'
            });
        }

        //Create Note
        const note = new Note({
            title:req.body.title || 'Untitled Note',
            contend:req.body.contend
        });

        //Save Note in the Database

        note.save()
            .then(data=>{
                console.log(data)
                res.send(data)
            })
            .catch(err=>{
                res.status(500).send({
                    message:err.message || 'some error occured while createinh the note'
                })
            })
    }
}