import Message from "../../../models/Message";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {
  const { method ,query:{conversationId}} = req;

  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });
  //add Message
  if (method === "POST") {
    const newMessage = new Message(req.body);

    try {
      const savedMessage = await newMessage.save();

      res.status(200).json({ message: "Message ajouter", savedMessage });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
}
