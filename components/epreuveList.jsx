import EpreuveCard from "./epreuveCard";
import styles from "../styles/EpreuveList.module.css";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EpreuveList() {
  const [query, setQuery] = useState("");
  const [epreuves, setEpreuves] = useState([]);
  console.log(query);

  const keys=["name","academicYear","category","session","promote",]

  useEffect(()=>{
    axios.get(`/api/epreuves?q=${query}`)
    .then((res)=>{
      setEpreuves(res.data)
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  },[query])
  const search = (dataEpreuves) => {
    return dataEpreuves.filter(
      (dataEpreuve) =>
        keys.some(
          (key) =>
          dataEpreuve[key].toLowerCase().includes(query) ||
            dataEpreuve[key].toUpperCase().includes(query)
        )
      // METHODE1
      // dataSinger.name.toLowerCase().includes(query) ||
      // dataSinger.fullname.toLowerCase().includes(query) ||
      // dataSinger.email.toLowerCase().includes(query) ||
      // dataSinger.style.map((item) => item.toLowerCase()).includes(query)
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative mt-20">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full h-16 pl-10 text-lg  text-gray-900 border border-gray-12 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Rechercher votre cours..."
            required
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.epreuve}>
          <h4 className={styles.title}> Epreuves</h4>
        </div>
      </div>
      <div className={styles.containerCard}>
        <EpreuveCard dataEpreuves={search(epreuves)} />
       
      </div>
      <Pagination />
    </div>
  );
}
