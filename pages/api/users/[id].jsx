import User from "@/models/User";
import db from "@/util/mongoDb";
import bcrypt from "bcrypt";
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
      const user = await User.findById(id);
      const {password,passwordConfirm,updatedAt,...other}=user._doc
      res.status(200).json(other);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    if (req.body.userId === req.query.id || req.body.isAdmin) {
      console.log(req.query.id);
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hashSync(req.body.password, salt);
          //   res.status(201).json("mot de passe hashed avec success");
        } catch (error) {
          res.status(500).json("erreur de l'hachage du mot de passe");
        }
      }

      try {
        const user = await User.findByIdAndUpdate(id, {
          $set: req.body,
        });
        !user && res.status(404).json("l'utilisateur n'est pas trouver");
        res.status(201).json({ user, msg: "utilisateur modifier" });
      } catch (error) {
        res
          .status(500)
          .json({ error, msg: "l'utilisateur n'est pas modifier" });
      }
    } else {
      res.status(403).json("impossible de modifier tu ne pas admin");
    }
  }
  if (method === "DELETE") {

      try {
        const user = await User.findByIdAndDelete(req.query.id);

        res.status(200).json({ user, msg: "utilisateur supprimer" });
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  }

