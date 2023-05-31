import Epreuve from "../../../models/Epreuve";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {
  const { method } = req;
  console.log(method);
  db.connect().catch((error) => {
    res.status(405).json("erreur connection Bd");
  });
  if (method === "GET") {
    try {
      const q = req.query;
      console.log(q);
      const epreuves = await Epreuve.find();
      !epreuves && res.staut(403).json("ep");

      res.status(200).json(epreuves);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const epreuve = await Epreuve.create(req.body);
      res.status(200).json(epreuve);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
