
import Conversation from "../../../models/Conversation";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {
  const {
    method

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
      if(method==="GET"){

        try {
          const conversations= await Conversation.find()
          res.status(200).json(conversations)
          
        } catch (error) {
          res.status(500).json(error)
        }
  }

  //get conversation a user


   
}



