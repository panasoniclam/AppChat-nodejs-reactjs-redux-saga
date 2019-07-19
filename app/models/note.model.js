const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema  = new Schema({
    title:Schema.Types.String,
    contend:Schema.Types.String
})
//module epxort
const note = mongoose.model('note',noteSchema)
module.exports = note