import mongoose from "mongoose"
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
    
        minLength:5,
        maxLength:20
    },
    email:{
        type:String,
      
    },
    password:{
        type:String,
      
    },
    passwordConfirm:{
        type:String,
       

    },
    isAdmin:{
        type:Boolean,
        
    }
},
{timestamps:true}
)

export default  mongoose.models.User || mongoose.model("User",UserSchema)