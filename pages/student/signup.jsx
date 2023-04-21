
import styles from "../../styles/Signup.module.css"
export default function Signup() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.containerLogo}>
            <h2 className={styles.logo}>TangaNaPete</h2>
          </div>
          <div className={styles.containerLogin}>
            <form className={styles.form}>
              <div className={styles.containerInput}>
                <label htmlFor=""> Nom</label>
                <input type="text" />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor=""> Email</label>
                <input type="email" />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor=""> Mot De Passe</label>
                <input type="password" />
              </div>
              <div className={styles.containerInput}>
                <label htmlFor=""> Confirmer votre mot de passe</label>
                <input type="password" />
              </div>
            </form>
          </div>
          <button className={styles.button}>S'inscrire</button>
        </div>
      </div>
    );
  }
  