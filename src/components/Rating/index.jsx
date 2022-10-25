//import react
import React from "react";
import PropTypes from "prop-types";

//import styles & assets
import styles from "./Rating.module.css";
import star from "../../assets/images/logement/star.svg";
import greyStar from "../../assets/images/logement/grey_star.svg";

const Rating = ({ rating }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rating}>
      {/* Affichage des etoiles en fonction de la note donnée à l'appartement. Complète la note avec des etoiles grises pour avoir une notation sur 5 */}
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            className={styles["rating__icon"]}
            src={star}
            alt=""
          />
        ) : (
          <img
            key={rangeElem.toString()}
            className={styles["rating__icon"]}
            src={greyStar}
            alt=""
          />
        )
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string,
};

export default Rating;
