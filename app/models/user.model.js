const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const userSchame = new Schema({
    name:Schema.Types.String,
    password:Schema.Types.String,
    nemberId:Schema.Types.ObjectId,
    dateCreate:Schema.Types.Date,
    jobTitle:Schema.Types.String,
    salaries:Schema.Types.Number
});

const user = mongoose.model('user',userSchame);
module.exports = user
