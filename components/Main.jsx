import React, { useState } from "react";
import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import styles from "../styles/Main.module.css";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/femme.png",
    "/img/femme-jeune.png",
    "/img/femme-etudiante.png",
  ];
  const description = [
    "Preparer vos épreuves (examen, interrogation, travaux pratiques)avec facilité",
    "uuuuuuuuuuuuuuuu",
    "ccccccccccccccc",
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
        {images.map((image, index) => (
          <div className={styles.imageContainer} key={index}>
            <Image
              className="mainImage"
              src={image}
              alt=""
              width={800}
              height={800}
            />
          </div>
        ))}
        <div className={styles.marketingContainer}>
          <p className={styles.description}>
            Preparer vos épreuves (examen, interrogation, travaux pratiques)
            avec facilité
          </p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Entrez le nom du cours"
              className={styles.input}
            />
            <button className={styles.search}>
              <span className={styles.searchIcon}> icone recherche</span>
              <span className={styles.searchText}> Recherche</span>
            </button>
          </div>
        </div>
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
