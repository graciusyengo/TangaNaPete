import Epreuve from "@/models/Epreuve";
import db from "@/util/mongoDb";
export default async function handler(req, res) {
  const { method } = req;
  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });
  if (method === "GET") {
    try {
      const epreuve = await Epreuve.findById(id);
      res.status(200).json(epreuve);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    if (req.body.userId === req.query.id ) {
      
      console.log(req.query.id);
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
          res.status(201).json("mot de passe hashed avec");
        } catch (error) {
          res.status(500).json("erreur de l'hachage du mot de passe");
        }
      }

      try {
        const epreuve = await Epreuve.findByIdAndUpdate(req.query.id, {
          $set: req.body
        });
        res.status(201).json(epreuve, { msg: "utilisateur modifier" });
      } catch (error) {
        res.status(500).json({ error, msg: "utilisateur n'est pas modifier" });
      }
    } else {
      res.status(403).json("tu peux seulement supprimer ton compte");
    }
    
  }
}
