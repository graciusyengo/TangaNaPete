import Epreuve from "@/models/Epreuve";
import db from "@/util/mongoDb";
export default async function handler(req, res) {
  const { method,query:{id} } = req;
  db.connect().catch((error) => {
    res.status(403).json("erreur connection avec mongo db");
  });


  // END POINT FOR THE EPREUVE

  if (method === "GET") {
    try {
      const epreuve = await Epreuve.findById(id);
      res.status(200).json(epreuve);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    if (req.body.userId === req.query.id  ) {
      
      console.log(req.query.id);
      try {
        const epreuve = await Epreuve.findByIdAndUpdate(req.query.id, {
          $set: req.body
        });
        !epreuve && res.status(201).json("l'epreuve n'est pas trouver")
        res.status(201).json({epreuve,  msg: "epreuve modifier" });
      } catch (error) {
        res.status(500).json({ error, msg: "l'epreuve n'est pas modifier" });
      }
    } else {
      res.status(403).json("impossible de modifier tu ne pas admin");
    }
    
  }  
  if (method ==="DELETE") {
    try {
      const epreuve = await Epreuve.findByIdAndDelete(id);
 !epreuve && res.status(403).json("l'preuve n'existe pas")
      res.status(200).json({epreuve, msg: "epreuve supprimer"});
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
