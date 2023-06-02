import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function NavBar() {
  const [isHovering, setHovering] = useState(false);

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
          <Link href="/student/signup">
            <div className={styles.containerInscription}>
              <button className={styles.inscription}>S'inscrire</button>
            </div>
          </Link>

        
            <Link href="/student/login">
              <div className={styles.containerConnexion}>
                <button className={styles.connexion}>Connexion</button>
              </div>
            </Link>
        
        </div>
      </div>
    </div>
  );
}
