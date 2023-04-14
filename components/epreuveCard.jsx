import Image from "next/image"
import styles from "../styles/EpreuveCard.module.css"
export default function EpreuveCard(){
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <Image src="/img/systeme-d'exploitation.jpeg" className={styles.img} height={250} width={200}/>
            <h3 className={styles.title}> Examen Systeme D'exploitation</h3>
            <h4 className={styles.academicYear}> 2021-2022</h4>
            <h4 className={styles.session}>1 session</h4>
            <h4 className={styles.promotion}> L1 Genie info</h4>
            </div>
        </div>
    )
}