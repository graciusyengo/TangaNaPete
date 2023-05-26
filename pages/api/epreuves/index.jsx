import Epreuve from "../../../models/Epreuve";
import dbConnect from "../../../util/mongoDb";

export default async function handler(req, res) {
  const { method } = req;
  console.log(method)
  dbConnect();
  if (method === "GET") {
    try {
      const epreuves = await Epreuve.find();
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
