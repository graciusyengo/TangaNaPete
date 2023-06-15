import User from "../../../models/User";
import db from "../../../util/mongoDb";
export default async function handler(req, res) {

  db.connect().catch((error) => {
    res.status(405).json("erreur connection Bd");
  });
  const { method } = req;
  console.log(method);

  if (method === "GET") {
    try {
      const users = await User.find();
       !users && res.status(403).json("utilisateur  pas trouver");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
 
