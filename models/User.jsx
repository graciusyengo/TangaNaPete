import mongoose from "mongoose"
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"champs obligatoire"],
        minLength:5,
        maxLength:20
    },
    email:{
        type:String,
        required:[true, "champs obligatoire"],
    },
    password:{
        type:String,
        required:[true,"champs obligtoire"]
    },
    passwordConfirm:{
        type:String,
       

    },
    isAdmin:{
        type:Boolean,
        required:true
    }
},
{timestamps:true}
)

export default  mongoose.models.User || mongoose.model("User",UserSchema)