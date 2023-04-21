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
          <li className={styles.listItem}>Epreuves</li>
          <li className={styles.listItem}>Nous Contactez</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.auth}>
          <div className={styles.containerInscription}>
            <button className={styles.inscription}>S'inscrire</button>
          </div>
          <div className={styles.containerConnexion}>
            <button className={styles.connexion}>Connexion</button>
          </div>
        </div>
      </div>
    </div>
  );
}
