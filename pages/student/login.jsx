import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email,password)
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerLogo}>
          <h2 className={styles.logo}>TangaNaPete</h2>
        </div>
        <div className={styles.containerLogin}>
          <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
           
            <div className={styles.containerInput}>
              <label htmlFor=""> Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "désolé veuillez entrer votre email",
                  pattern:
                  {
                    value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i,
                    message:"entrer un email valide",
                  }
                })}
              />

              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className={styles.containerInput}>
              <label htmlFor=""> Mot De Passe</label>
              <input type="password"  {...register("password", {
                  required: " veuillez entrer votre mot de passe ",
                  minLength:
                  {
                    value:6,
                    message:"veuillez entrez un mot de passe de plus de 5 caractere",
                  }
                })} />
                 {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
               
            </div>
            <button className={styles.button}>Se Connecter</button>
          </form>
        </div>

        <div className={styles.goToSignup}>
          <span> vous avez pas un compte ?</span>
          <Link href="/student/signup">
            <span className={styles.createAnAccount}> Creer un compte</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
