import styles from "../../styles/Epreuve.module.css";
import Image from "next/image";

export default function Epreuve() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/systeme-d'exploitation.jpeg"
          height={500}
          width={500}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.infoEpreuve}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>Nom Du Cours :</h2>
            <h3 className={styles.value}> Syteme D'exploitaion</h3>
          </div>
          <div className={styles.yearContainer}>
            <h2 className={styles.year}>Année Academique :</h2>
            <h3 className={styles.value}> 2019 - 2020</h3>
          </div>
          <div className={styles.sessionContainer}>
            <h2 className={styles.session}>Session :</h2>
            <h3 className={styles.value}> 2ere Sesion</h3>
          </div>
          <div className={styles.promotionContainer}>
            <h2 className={styles.promotion}>Session :</h2>
            <h3 className={styles.value}> L1 genie info</h3>
          </div>
        </div>
      </div>
    </div>
  );
}