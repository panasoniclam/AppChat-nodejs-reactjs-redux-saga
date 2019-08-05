const Native = require('./../models/model.native')
module.exports = {
    find:(req,res,next)=>{
        Native.find({})
        .then(result=>{
            res.status(200).json(result)
        })
    },
    create:(req,res,next)=>{
        if(!req.body.title){
            return res.status(400).send({
                message:'username contend cannot emtry'
            })
        }
        const user = new Native({
            title:req.body.title,
            contend:req.body.contend
        })
        user.save()
        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || 'sone error occured while create /...'
            })
        })
    },
    findone:(req,res,next)=>{
        user.findById(req.params.userId)
        .then(result=>{
            if(!result){
                return res.status(400).json({
                    message:'user not found by id'+req.params.userId
                })
            }
            res.status(200).json(result)
        })
        .catch(err=>{
            if(err.kind == 'ObjectId'){
                return res.status(404).send({
                    message:"user not found with id"+req.params.userId
                })
            }
            return res.status(500).json({
                message:'error retrieving with id'+req.params.userId
            })
        })
    }
}