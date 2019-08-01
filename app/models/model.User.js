const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserJWTSchema = new Schema({

    username:Schema.Types.String,
    hash_passwd:Schema.Types.String,
    email:Schema.Types.String,
    created_date:Schema.Types.String,
    first_name:Schema.Types.String,
    birth_date:Schema.Types.String,
    gender:Schema.Types.String,
    avatar:Schema.Types.String
});
// comparePassword
UserJWTSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password)
}

//Export function to create "UserSchema" model class
module.exports = mongoose.model('UserJWTSchema', UserJWTSchema );