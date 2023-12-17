import Message from "../../../models/Message";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {
  const { method ,
    query:{id}
    
  } = req;


  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });
  if(method==="GET"){
      try {
        const messages=await Message.find({
          conversationId:id
        })
        console.log(id)
        res.status(200).json(messages)
          
      } catch (error) {
          res.status(500).json(500)
          
      }
  }

  //get conversation a user
}
