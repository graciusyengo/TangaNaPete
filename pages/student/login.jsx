import styles from "../../styles/Login.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { getError } from "../../util/error";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
export default function Login() {
  const router = useRouter();
  const { redirect } = router.query;

  const {status, data: session } = useSession();
  console.log(session);
  console.log(status)

  useEffect(() => {
    if ((session?.user) && (session?.user.email==="yengo@gmail.com")) {
      router.push(redirect || "/admin/dashboard");
    } else if(session?.user) {
   
      router.push(redirect || "/student/dashboard");

    }
  }, [router, session, redirect]);
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(result);
      // si error n'est pas null
      if (result?.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }

    // if(result.error){
    //   toast.error(result.error)
    // }
    // } catch (err) {
    //   toast.error(getError(err))

    // }
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

            
            <button className={styles.button}>SeConnecter</button>
          </form>
        </div>

        <div className={styles.goToSignup}>
          <span> vous avez pas un compte ?</span>
          <Link href="/student/signup">
            <span className={styles.createAnAccount}> Creer un compte</span>
          </Link>
        </div>
        <ToastContainer position="bottom-center" limit={1} />
      </div>
    </div>
    </>
  );
}
