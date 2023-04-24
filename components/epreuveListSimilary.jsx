import EpreuveCard from "./epreuveCard";
import styles from "../styles/EpreuveListSimilary.module.css";
import Pagination from "./pagination";

export default function EpreuveList() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
       <h1 className={styles.title} >Epreuves Similaire</h1> 
      </div>
      <div className={styles.containerCard}>
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
        <EpreuveCard />
      </div>
      <Pagination/>
    </div>
  );
}
