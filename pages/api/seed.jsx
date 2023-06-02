import db from "../../util/mongoDb"
import User from "../../models/User"
import data from "../../util/data"

export default async function handler(req,res){
    console.log("ffff")

    await db.connect()
    await User.deleteMany()
    await User.insertMany(data.users)
    await db.disconnect()
    res.send({msg:"succefully"})
}