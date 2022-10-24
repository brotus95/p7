import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Carousel.module.css";
import Chevron from "../UI/SVG/Chevron";

const Carousel = ({ imgList, title }) => {
  const [counter, setCounter] = useState(1);
  const imgListLength = imgList.length;

  if (imgListLength === 0) {
    return "";
  }

  if (imgListLength === 1) {
    return (
      <div className={styles.carousel}>
        <img src={imgList[0]} alt={title} />
      </div>
    );
  }

  const nextPicture = () => {
    setCounter(counter === imgListLength ? 1 : counter + 1);
  };

  const previousPicture = () => {
    setCounter(counter === 1 ? imgListLength : counter - 1);
  };

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
