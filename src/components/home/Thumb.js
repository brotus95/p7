import React from "react";
import PropTypes from "prop-types";
import "./thumb.css";

const Thumb = ({ imgURL, imgALT, title }) => {
  return (
    <article className="thumb">
      <img src={imgURL} alt={imgALT} className="img" />
      <h2 className="title">{title}</h2>
    </article>
  );
};

Thumb.propTypes = {
  imgURL: PropTypes.string,
  imgALT: PropTypes.string,
  title: PropTypes.string,
};

export default Thumb;
