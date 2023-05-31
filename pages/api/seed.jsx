import db from "../../util/mongoDb"
import User from "../../models/User"

export default async function handler(){

    await db.connect()
    await User()
}