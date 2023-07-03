import Epreuve from "../../../models/Epreuve";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {

  db.connect().catch((error) => {
    res.status(405).json("erreur connection Bd");
  });
  const { method } = req;
  console.log(method);
 
  if (method === "GET") {
    try {
      
      const epreuves = await Epreuve.find();
       !epreuves && res.status(403).json("epreuve pas trouver");

      res.status(200).json(epreuves);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    const {}
    try {
      const epreuve = await Epreuve.create(req.body);
      res.status(200).json(epreuve);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
