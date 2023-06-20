import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";
export default function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const [loanding,setLoanding]=useState(false)
  const router = useRouter()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const admin={
      username,
      password
    }
    console.log(admin)
   try {
    const res= await axios.post("/api/admin/login",admin)
    console.log(res)
    router.push("/admin/dashboard")
    
   } catch (error) {
    console.log(error)
   }

  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerLogo}>
          <h2 className={styles.logo}>TangaNaPete</h2>
        </div>
        <div className={styles.containerLogin}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.containerInput}>
              <label htmlFor="">Nom</label>
              <input type="text" required  onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className={styles.containerInput}>
              <label htmlFor=""> Mot De Passe</label>
              <input type="password" required onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button className={styles.button}>SeConnecter</button>
          </form>
        </div>

        <div className={styles.goToSignup}>
          <span> vous avez pas un compte ?</span>
          <Link href="/student/signup">
            <span className={styles.createAnAccount}> Creer un compte</span>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
