import Epreuve from "@/models/Epreuve";
import db from "@/util/mongoDb";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
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
}
