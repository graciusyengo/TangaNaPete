import db from "@/util/mongoDb";
import User from "../../../models/User";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  db.connect().catch((error) => {
    console.log(error);
  });
  const { method } = req;
  if (method === "POST") {
    try {
      //hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hashSync(req.body.password,salt);
      //generate new paasword
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        passwordConfirm:req.body.passwordConfirm,
        isAdmin: req.body.isAdmin
      });
      //save user
      const user = await newUser.save();
      console.log(user)
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json("erreur d'inscription");
    }
  }
}
