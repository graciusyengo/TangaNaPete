import React from "react";
import styles from "../../styles/Epreuve.module.css";
import Image from "next/image";
import EpreuveListSimilary from "../../components/epreuveListSimilary";
import db from "../../util/mongoDb";
import { useRouter } from "next/router";
import axios from "axios";
import Pdf from "react-to-pdf";

const ref = React.createRef();
console.log(ref);
export default function Epreuve({ epreuve }) {
  console.log(epreuve);
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [11, 10],
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div ref={ref} className={styles.item}>
          <Image src={epreuve.img} height={800} width={800} alt="epreuve" />
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
              <h2 className={styles.promotion}>Promotion:</h2>
              <h3 className={styles.value}> {epreuve.promote}</h3>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Pdf
              targetRef={ref}
              fillname="epreuve_doawload.pdf"
              options={options}
              x={0.5}
            >
              {({ toPdf }) => <button className={styles.button} onClick={toPdf}>
                  
                  Telecharger
                </button>
              }
            </Pdf>
            <button className={styles.button}> voir la resolution </button>
          </div>
        </div>
      </div>
      {/* <EpreuveListSimilary /> */}
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/epreuves/${params.id}`
  );
  return {
    props: {
      epreuve: res.data,
    },
  };
};
