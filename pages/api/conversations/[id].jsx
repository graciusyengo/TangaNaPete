import Conversation from "../../../models/Conversation";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });

  //new conversation
  if (method === "GET") {
    try {
      const conversation = await Conversation.find({
        members: { $in: [id] },
      });
      res.status(200).json(conversation);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //get conversation a user
}
