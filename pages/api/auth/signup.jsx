import db from "@/util/mongoDb";
import User from "../../../models/User"

export default async function handler(req,res) {

  const { method } = req;
  if (method === "GET") {
    const formData= req.body
    try {
        const users= await User.create(formData)
        res.status(200).json(users)
        
    } catch (error) {
        res.status(500).json("erreur d'inscription")
        
    }
  }
}
