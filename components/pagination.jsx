import styles from "../styles/Pagination.module.css"
export default function Pagination(){
    return(
        <div className={styles.container}>
            <div className={styles.listItem}>
                <div className={styles.item}>1</div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
                <div className={styles.item}>4</div>
                <div className={styles.item}>5</div>
                <div className={styles.item}>6</div>
                <button className={styles.button}> Suivant</button>
            </div>
        </div>
    )
}