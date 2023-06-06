import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Menu } from '@headlessui/react'
import "react-toastify/dist/ReactToastify.css"
export default function NavBar() {
  const { status, data: session } = useSession();
  console.log(status);


  const logoutHandleClick=()=>{
    signOut({callbackUrl:"/student/login"})
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/">
          <div className={styles.containerLogo}>
            <h2 className={styles.logo}>TangaNaPete</h2>
          </div>
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/epreuvelists">
            <li className={styles.listItem}>Epreuves</li>
          </Link>
          <li className={styles.listItem}>Nous Contactez</li>
          {/* <div className={addContainer()}  >
            <h5 >Interrogation</h5>
            <h5> Examens</h5>
            <h5> Travaux Pratique</h5>
          </div> */}
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.auth}>
        {status === "loading" ? (
            "loading"
          ) : session?.user ? (
            <span className={styles.logOut} onClick={logoutHandleClick}>Se deconnecter</span>
          ) : (
          <Link href="/student/signup">
            <div className={styles.containerInscription}>
              <button className={styles.inscription}>S'inscrire</button>
            </div>
          </Link>
        )}
          {status === "loading" ? (
            ""
          ) : session?.user ? (
            <Menu as="div" className="relative ">
            <span className={styles.name}>{session.user.name}</span> 
            </Menu>
          ) : (
            <Link href="/student/login" className={styles.login} >
              <div className={styles.containerConnexion}>
                <button className={styles.connexion}>Connexion</button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
