import React, { useState } from "react";
import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import styles from "../styles/Main.module.css";
import Link from "next/link";
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
                  /> */}<Link href="/epreuvelists">
                    <button className={styles.searchButton}>Rechercher vos épreuves</button>
                    </Link>
                  
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
