import mongoose, { connection } from "mongoose";

// il vas commencer à stocker l'état de ma connection
const connections = {};

 async function connect()  {
  // verification si nous somme connecter 
  if (connection.isConnected) {
    console.log("vous etez deja connecter");
    return;
  }
  // signifie que nous avons une file d'attente de connection
  // recuperation de la premiere connection
  if (mongoose.connections.length > 0) {  
   connection.isConnected=mongoose.connections[0].readyState
   // signifie que la connection est remplis et l'etat du rayons est 1 on est connecter (mode de connection)
   if(connection.isConnected===1){
    // signifie qu'il n epas necessaire de se connecter à la base de données car nous somme deja connecter 
    console.log("utiliser la connection precedent")
    return;

    
   }
   await mongoose.disconnect()
  }
  const db= await mongoose.connect(process.env.MONGODB_URL)
  console.log("new connection")
  connection.isConnected=db.connections[0].readyState
};

 async function disconnect(){
  // il vas se deconnecter que si on est en mode production
  if(connection.isConnected){
    if(process.env.NODE_ENV==="production"){
      await mongoose.disconnect()
      connection.isConnected=false
    }
  }

   
}
const db={connect,disconnect }
export default db

// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error(
//     "Please define the MONGODB_URL environment variable inside .env.local"
//   );
// }
// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */

// let cached = global.mongoose;
// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }
// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };
//     cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
// export default dbConnect;
