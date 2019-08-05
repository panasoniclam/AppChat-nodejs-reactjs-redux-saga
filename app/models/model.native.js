const mongoose = require('mongoose')
const Schema = mongoose.Schema ;
const nativeSchema = new Schema({
    title:{type:Schema.Types.String,unique:true,required:true},
    contend:{type:Schema.Types.String,unique:true,required:true}
})
const native = mongoose.model('native',nativeSchema)
module.exports =native