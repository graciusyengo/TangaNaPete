import Footer from "./Footer";
import NavBar from "./NavBar";
import Main from "./Main";
import styles from "../styles/Layout.module.css"
import EpreuveList from "./epreuveList";

export default function Layout ({children}){
    return(
        <div className={styles.container}>
            <NavBar/>
            <Main/>
            <EpreuveList/>
            {children}
            <Footer/>
            </div>
    )
}