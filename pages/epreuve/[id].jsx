import styles from "../../styles/Epreuve.module.css";
import Image from "next/image";
import EpreuveListSimilary from "../../components/epreuveListSimilary"
import db from "../../util/mongoDb"
import Epreuve from "../../models/Epreuve"
import { useRouter } from "next/router";

export default function EpreuveUni() {
  const {query}= useRouter()
  const {id}=  query
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Image
            src="/img/systeme-d'exploitation.jpeg"
            height={500}
            width={400}
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
          <div className={styles.buttonContainer}>
            <button className={styles.button}> Telecharger</button>
            <button className={styles.button}> Voir</button>
          </div>
        </div>
      </div>
      <EpreuveListSimilary/>
    </div>
  );
}

// export const getServerSideProps= async(context)=>{
  

//   const {params}=context
//   const {id}=params
//   db.connect()
//   const epreuve= await Epreuve.findOne({id})
 

//   return{
//     props:{


//     }
//   }


