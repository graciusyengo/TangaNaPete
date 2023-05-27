import React, { useState } from "react";
import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import styles from "../styles/Main.module.css";
export default function Featured() {
  const [index, setIndex] = useState(0);
  const imagesAndDescriptions = [
    {
      id:"1",
      img: "/img/femme.png",
      description:
        "Preparer vos épreuves (examen, interrogation, travaux pratiques)avec facilité",
    },
    {
      id:"2",
      img: "/img/femme-jeune.png",
      description: "Résolutions des chaques épreuves (examen, interrogations,travaux pratiques)",
    },
    {
      id:"3",
      img: "/img/femme-etudiante.png",
      description: "Economisez votre temps en trouvant les épreuves passées ici ",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles["container"]}>
      <BiCaretLeft
        className={styles.BiCaretLeft}
        onClick={() => handleArrow("l")}
      />
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {imagesAndDescriptions.map((imageAndDescription) => (
          
            <div className={styles.imageContainer} key={imageAndDescription.id}>
              <p className={styles.description}>
                {imageAndDescription.description}
              </p>
              <Image
                className="mainImage"
                src={imageAndDescription.img}
                alt=""
                width={800}
                height={800}
              />
              <div className={styles.marketingContainer}>
                <div className={styles.searchContainer}>
                  {/* <input
                    type="text"
                    placeholder="Entrez le nom du cours"
                    className={styles.input}
                  /> */}
                   <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                  <button className={styles.search}>
                    <span className={styles.searchIcon}> icone recherche</span>
                    <span className={styles.searchText}> Recherche</span>
                  </button>
                </div>
              </div>
            </div>
        ))}
      </div>
      <BiCaretRight
        className={styles.BiCaretRight}
        // size="200px"
        // ObjectFit="contain"
        onClick={() => handleArrow("r")}
      />
    </div>
  );
}
