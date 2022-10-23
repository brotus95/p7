import "./notation.css";
import star from "../../assets/images/logement/star.svg";
import greyStar from "../../assets/images/logement/grey_star.svg";
import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            className="rating__icon"
            src={star}
            alt=""
          />
        ) : (
          <img
            key={rangeElem.toString()}
            className="rating__icon"
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
