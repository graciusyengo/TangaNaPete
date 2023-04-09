import Footer from "./Footer";
import NavBar from "./NavBar";
import Main from "./Main";
import styles from "../styles/Layout.module.css"
export default function Layout ({children}){
    return(
        <div className={styles.container}>
            <NavBar/>
            <Main/>
            {children}
            <Footer/>
            </div>
    )
}