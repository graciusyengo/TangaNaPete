import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Main from "../components/Main";
import EpreuveList from "../components/epreuveList";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>TangaNaPete</title>
        <meta
          name="description"
          content="Preparation des épreuves (examen, interro,Tp)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
<NavBar/>
 <Main />
 <EpreuveList />
    </>
  );
}



