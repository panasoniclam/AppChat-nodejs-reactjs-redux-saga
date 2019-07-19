const mongoose = require('mongoose');
const Schema =  mongoose.Schema ;
const projectSchema = new Schema({
    nameProject:Schema.Types.String,
    authorProject:Schema.Types.String,
    tasks:[{
        type:Schema.Types.ObjectId,
       
    }]
})

 
const project = mongoose.model('project',projectSchema);
 
module.exports =   project
 
