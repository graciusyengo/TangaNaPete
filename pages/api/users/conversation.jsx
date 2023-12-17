import Conversation from "../../../models/Conversation";
import db from "../../../util/mongoDb";
import { useRouter } from 'next/router';
export default async function handler(req, res) {
  const {
    method,
   query: {id}
  
  } = req;

  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });
 
 
  //new conversation
  if(method==="POST"){
    const newConversation= new Conversation({
      members:[req.body.senderId,req.body.receiverId]
  })
 
      try {
        const savedConversation= await newConversation.save()
         
          res.status(200).json({message:"conversation ajouter", savedConversation})
          
      } catch (error) {
        res.status(500).json(error)
          
      }
  }

  //get conversation a user

  if(method==="GET"){

    try {
      const conversation= await Conversation.find({
        members:{$in:[id]}
      })
      console.log(id)
      res.status(200).json(conversation)
      
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
 