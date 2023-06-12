import styles from "../../styles/Epreuve.module.css";
import Image from "next/image";
import EpreuveListSimilary from "../../components/epreuveListSimilary";
import db from "../../util/mongoDb";
import { useRouter } from "next/router";
import axios from "axios";

export default function Epreuve({ epreuve }) {
  console.log(epreuve);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image
            src={epreuve.img}
            height={500}
            width={400}
            alt="epreuve"
          />
        </div>
        <div className={styles.item}>
          <div className={styles.infoEpreuve}>
            <div className={styles.nameContainer}>
              <h2 className={styles.name}>Nom Du Cours :</h2>
              <h3 className={styles.value}> {epreuve.name}</h3>
            </div>
            <div className={styles.yearContainer}>
              <h2 className={styles.year}>Année Academique :</h2>
              <h3 className={styles.value}> {epreuve.academicYear}</h3>
            </div>
            <div className={styles.sessionContainer}>
              <h2 className={styles.session}>Session :</h2>
              <h3 className={styles.value}> {epreuve.session}</h3>
            </div>
            <div className={styles.promotionContainer}>
              <h2 className={styles.promotion}>Promote:</h2>
              <h3 className={styles.value}> {epreuve.session}</h3>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}> Telecharger</button>
            <button className={styles.button}> Voir</button>
          </div>
        </div>
      </div>
      {/* <EpreuveListSimilary /> */}
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/epreuves/${params.id}`);

  return {
    props: {
      epreuve: res.data
    },
  };
};
