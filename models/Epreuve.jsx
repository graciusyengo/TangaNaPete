import mongoose from "mongoose"


const EpreuveSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"champs obligatoire"],
        minlength:3,
    },
    academicYear:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true

    },
    session:{
        type:String,
        required:true
    },
    promote:{
        type:String,
        required:true
    },
    img:{
        type:String,
    }
},
{timestamps:true}
)
export default  mongoose.models.Epreuve || mongoose.model("Epreuve",EpreuveSchema)