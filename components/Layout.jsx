import Footer from "./Footer";
import NavBar from "./NavBar";
import { ToastContainer } from "react-toastify";


import styles from "../styles/Layout.module.css"


export default function Layout ({children}){
    
    return(


        <div className={styles.container}>
            <NavBar/>
           
            {children}
            {/* <Footer/> */}
            </div>
    )
}