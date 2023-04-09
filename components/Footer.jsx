import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h4 className={styles.title}>Epreuves </h4>
        <p className={styles.text}>
          Examen
          <br /> Interrogation
          <br /> Travaux Pratique
        </p>
      </div>
      <div className={styles.item}>
        <h4 className={styles.title}>Nous Contactez </h4>
        <p className={styles.text}>
          +243972479631
          <br /> yengogracius@gmail.com
          <br />
          <div className={styles.sociaux}>
            <div className={styles.facebook}>facebook</div>
            <div className={styles.linkedin}>linkedin</div>
            <div className={styles.instangram}>instangram</div>
          </div>
        </p>
      </div>
      <div className={styles.item}>
        <h4 className={styles.title}> Faire une suggestion</h4>
        <p className={styles.description}>
          Avez-vous trouvé des erreurs dans l’interface ou les textes? Ou
          savez-vous comment améliorer l’interface utilisateur Tanga Na Pete?
          Nhésitez pas à envoyer des suggestions. Cest très important pour nous!
        </p>
        <button className={styles.buttonComment}>
          {" "}
          Ajouter de commentaire
        </button>
      </div>
    </div>
  );
}
