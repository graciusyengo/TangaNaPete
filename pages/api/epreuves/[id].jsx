import Epreuve from "@/models/Epreuve";
import dbConnect from "@/util/mongoDb";
export default async function handler(req, res) {
  const { method,query:{id} } = req;
  dbConnect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });

  if (method === "GET") {
    
    console.log(id)
    try {
      const epreuve = await Epreuve.findById(id)
      res.status(200).json({ epreuve, msg: "voici l'utilisateur" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
