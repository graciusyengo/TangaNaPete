import mongoose from "mongoose";

const MessageSchema=new mongoose.Schema({
   conversationId: {
       type:String

    },

    senderId:{
        type:String 
    },
    text:{
        
        type:String
    }


})
export default mongoose.models.Message || mongoose.model("Message", MessageSchema);