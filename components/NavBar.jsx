import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.containerLogo}>
          <h2 className={styles.logo}>TangaNaPete</h2>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Epreuve</li>
          <li className={styles.listItem}>Nous Contactez</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.auth}>
          <div className={styles.containerInscription}>
            <span className={styles.inscription}>S'inscrire</span>
          </div>
          <div className={styles.containerConnexion}>
            <span className={styles.connexion}>Connexion</span>
          </div>
        </div>
      </div>
    </div>
  );
}
