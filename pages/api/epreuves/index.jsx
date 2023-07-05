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
    
    try {
      const {name, academicYear,session,promote,img}= req.body
      console.log(name,img,academicYear,promote,session)
      if(!name||!academicYear||!session||!promote||!img){
       return res.status(422).json({error: "veuiller remplir tous les champs"})
      }
      const newEpreuve= new Epreuve({
       name:name,
       academicYear:academicYear,
       session:session,
       promote:promote,
       img:img
      
      }) 
     const epreuve= await newEpreuve.save()
      res.status(201).json({success:"enregistrement reussi"});
    } catch (error) {
      res.status(500).json({error:"internal server error"});
    }
  }
}
