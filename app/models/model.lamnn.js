const mongodb = require('mongoose');
const Schema = mongodb.Schema;
const bcript = require('bcrypt')
const lamnnSchema = new Schema({
   username:{
       type:String,
       required:true,
       unique:true
   },
   password:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
    
       unique:true
   }
})
//comparepasswd
lamnnSchema.method.comparePassword = (password)=>{
    return bcript.compareSync(password,this.hash_passwd)
}

module.exports = mongodb.model("lamnnSchema",lamnnSchema)