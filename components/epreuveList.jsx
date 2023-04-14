import EpreuveCard from "./epreuveCard";
import styles from "../styles/EpreuveList.module.css";

export default function EpreuveList() {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Entrez le nom du cours"
          className={styles.input}
        />
        <button className={styles.search}>
          <span className={styles.searchIcon}> icone recherche</span>
          <span className={styles.searchText}> Recherche</span>
        </button>
        <div className={styles.epreuve}>
          <h4 className={styles.title}> Epreuves</h4>

        </div>
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
    </div>
  );
}
