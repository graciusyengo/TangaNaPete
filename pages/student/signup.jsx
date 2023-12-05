import styles from "../../styles/Signup.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import axios from "axios"
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
export default function Signup() {
  const router= useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password, passwordConfirm }) => {
    console.log(name, email, password, passwordConfirm);
    if (password !== passwordConfirm) {
      alert("votre mot de passe n'est match pas");
    } else {
      const user = {
        name: name,
        email: email,
        password:password,
        passwordConfirm:passwordConfirm,
      };
      try {
      const res= await axios.post("/api/auth/signup", user);
      router.push("/student/login")
      console.log(res)
        console.log("ok")
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
    <NavBar/>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.containerLogo}>
          <h2 className={styles.logo}>TangaNaPete</h2>
        </div>
        <div className={styles.containerLogin}>
          <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
            <div className={styles.containerInput}>
              <label htmlFor=""> Nom</label>
              <input
                type="text"
                {...register("name", {
                  required: "désolé veuillez entrer votre nom",
                  maxLength: {
                    value: 15,
                    message: "Veuillez entrer un nom de moins de 16 caractères",
                  },
                })}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>
            <div className={styles.containerInput}>
              <label htmlFor=""> Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "désolé veuillez entrer votre email",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i,
                    message: "entrer un email valide",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className={styles.containerInput}>
              <label htmlFor=""> Mot De Passe</label>
              <input
                type="password"
                {...register("password", {
                  required: " veuillez entrer votre mot de passe ",
                  minLength: {
                    value: 6,
                    message:
                      "veuillez entrez un mot de passe de plus de 5 caractere",
                  },
                })}
              />

              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
            <div className={styles.containerInput}>
              <label htmlFor=""> Confirmer votre mot de passe</label>
              <input
                type="password"
                {...register("passwordConfirm", {
                  required: "veuillez confirmer votre mot de passe",
                  minLength: {
                    value: 6,
                    message:
                      "votre confirmation de mot de passe doit macther avec votre mot passe",
                  },
                })}
              />
              {errors.passwordConfirm && (
                <div className="text-red-500">
                  {errors.passwordConfirm.message}
                </div>
              )}
            </div>
            <button type="submit" className={styles.button}>
              S'inscrire
            </button>
          </form>
        </div>

        <div>
          <span> vous avez deja un compte ?</span>
          <Link href="/student/login">
            <span className={styles.createAnAccount}> Se Connecter</span>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
