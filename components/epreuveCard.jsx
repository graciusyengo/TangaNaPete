import Image from "next/image";
import styles from "../styles/EpreuveCard.module.css";
import Link from "next/link";
export default function EpreuveCard({ dataEpreuves }) {
  console.log(dataEpreuves);
  return (
    <div className={styles.container}>
      {dataEpreuves.map((epreuve) => {
        {console.log(epreuve.img)}
        <div className={styles.wrapper} key={epreuve._id}>
          <Link href="/epreuve/12">
            <Image
              src={epreuve.img}
              alt="epreuve"
              priority="false"
              className={styles.img}
              height={250}
              width={200}
            />
          </Link>

           <h3 className={styles.title}> {epreuve.name}</h3>
          <h4 className={styles.academicYear}> {epreuve.academicYear}</h4>
          <h4 className={styles.session}>{epreuve.session}</h4>
          <h4 className={styles.promotion}> {epreuve.promote}</h4> 
        </div>;
      })}
    </div>
  );
}
