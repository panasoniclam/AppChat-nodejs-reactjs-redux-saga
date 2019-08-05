const mongoose = require('mongodb');
const bcript = require('bcrypt');
const SALT_FACTOR = 10;
const Schema = mongodb.Schema;
const UserSchema = new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    displayName:String,
    bio:String
})
UserSchema.methods.name = ()=>{
    return this.displayName || this.username
}
 
const noop = ()=>{}; //a do-thing function for usewith the crypt module

   UserSchema.pre("save",done=>{
        const user = this;
        if(!user.isModified("password")){
            return done()
        }
        bcript.genSalt(SALT_FACTOR,(err,salt)=>{
            if(err){
                return done(err);
            }
            bcript.hash(user.password,salt,noop,(err,hashedPassword)=>{
                if(err){
                    return done(err);
                }
                user.password = hashedPassword;
                done();
            })
        })
    })
UserSchema.methods.chechPassword = (guess,done)=>{
    bcript.compare(guess, this.password,(err,isMatch)=>{
        done(err,isMatch)
    })
}

const USER = mongoose.model("User",UserSchema)
module.exports = USER