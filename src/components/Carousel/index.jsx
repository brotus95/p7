//import react
import React, { useState } from "react";
import PropTypes from "prop-types";

//import css & assets
import styles from "./Carousel.module.css";
import Chevron from "../UI/SVG/Chevron";

const Carousel = ({ imgList, title }) => {
  const [counter, setCounter] = useState(1);
  const imgListLength = imgList.length;

  //si pas d'images du bien on affiche rien
  if (imgListLength === 0) {
    return "";
  }

  //si une seule image alors on affiche l'image sans les boutons
  if (imgListLength === 1) {
    return (
      <div className={styles.carousel}>
        <img src={imgList[0]} alt={title} />
      </div>
    );
  }

  //fonction qui vérifie sur quelle image on est positionnée pour pouvoir aller à la suivante
  //si on est a la dernière image alors la fonction nous renvoie au début
  const nextPicture = () => {
    setCounter(counter === imgListLength ? 1 : counter + 1);
  };

  //fonction qui vérifie sur quelle image on est positionnée pour pouvoir aller à la précédente
  //si on est a la première image alors la fonction nous renvoie à la fin
  const previousPicture = () => {
    setCounter(counter === 1 ? imgListLength : counter - 1);
  };

  //image + bouton précédent et bouton suivant
  return (
    <div className={styles.carousel}>
      <button className={styles["chevron-left"]} onClick={previousPicture}>
        <Chevron />
      </button>

      <img src={imgList[counter - 1]} alt={title} />

      <div className={styles.counter}>
        {counter}/{imgList.length}
      </div>

      <button className={styles["chevron-right"]} onClick={nextPicture}>
        <Chevron />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  imgList: PropTypes.array,
  title: PropTypes.string,
};

export default Carousel;
