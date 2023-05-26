import Image from "next/image";
import styles from "../styles/EpreuveCard.module.css";
import Link from "next/link";

export default function EpreuveCard() {
  return (
    <div className={styles.container}>
        
      <div className={styles.wrapper}>
        <Link href="/epreuve/12">
          <Image
            src="/img/systeme-d'exploitation.jpeg"
            alt="epreuve"
            priority="false"
            className={styles.img}
            height={250}
            width={200}
          />
        </Link>
        <h3 className={styles.title}> Examen Systeme D'exploitation</h3>
        <h4 className={styles.academicYear}> 2021-2022</h4>
        <h4 className={styles.session}>1 session</h4>
        <h4 className={styles.promotion}> L1 Genie info</h4>
      </div>
    </div>
  );
}
