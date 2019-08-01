const Note = require('./../models/note.model')
module.exports = {
    //create  note and save note
    findAll:(req,res,next)=>{
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
        if(!req.body.title){
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
    },
    findOne:(req,res,next)=>{
        Note.findById(req.params.noteId)
        .then(note=>{
            if(!note){
                return res.status(404).send({
                    message:'Note not found with od'+req.params.noteId
                })
            }
            res.send(note)
        })
        .catch(err=>{
            if(err.kind == 'ObjectId'){
                return res.status(404).send({
                    message:'Note not found with id'+ req.params.noteId
                });

            }
            return res.status(500).send({
                message:'error retrieving note with id'+req.params.noteId
            })
        })
        
    },
    update:(req,res,next)=>{
        //validate requested
        if(!req.body.contend){
            return res.status(400).send({
                message:'Note contend can be not empty'
            })
        }
         //find note and update it with the request body
         Note.findByIdAndUpdate(req.params.noteId,{
             title:req.body.title,
             contend:req.body.contend
         },{new:true})
         .then(note=>{
             if(!note){
                 return res.status(404).send({
                     message:'Note not found with id'+req.params.noteId
                 });
             }
         })
         .catch(err=>{
             if(err.kind=== 'ObjectId'){
                 return res.status(404).send({
                     message:'Note not found id'+req.params.noteId
                 })
             }
             return res.status(500).send({
                 message:'Error updating note with id'+req.params.noteId
             })
         })
    },
    delete:(req,res,next)=>{
        Note.findByIdAndRemove(req.params.noteId)
        .then(note=>{
            if(!note)
            {
                 return res.status(404).send({
                message:'Note not found with id'+res.params.noteId
                })
            }
           res.send({
               message:'Note deleted successful !'
           });
        })
        .catch(err=>{
            if(err.kind ==='ObjectId' || err.name === 'NotFound'){
                return res.status(404).send({
                    message:'note not found with id'+req.params.noteId
                })
            }
            return res.status(500).send({
                message:'cound not delete note with id'+req.params.noteId
            })
        })
    }
}