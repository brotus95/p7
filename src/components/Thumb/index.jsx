import React from "react";
import PropTypes from "prop-types";
import styles from "./Thumb.module.css";

const Thumb = ({ imgURL, imgALT, title }) => {
  return (
    <article className={styles.thumb}>
      <img src={imgURL} alt={imgALT} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
};

Thumb.propTypes = {
  imgURL: PropTypes.string,
  imgALT: PropTypes.string,
  title: PropTypes.string,
};

export default Thumb;
