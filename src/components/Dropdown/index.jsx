//import react
import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//import styles & assets
import styles from "./Dropdown.module.css";
import Chevron from "../UI/SVG/Chevron";

const Dropdown = ({ title, description }) => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  //styles légèrement différent selon la page où est appelé le dropdown
  const detailsStyles = isAboutPage
    ? styles.details
    : `${styles.details} ${styles["house-page-details"]}`;
  return (
    <details className={detailsStyles}>
      <summary>
        {title} <Chevron />
      </summary>
      {/* description accepte les string mais aussi les array pour pouvoir lister les equipements disponibles. Se fait via le propTypes plus bas */}
      {Array.isArray(description) ? (
        <ul className="dropdown__list">
          {description.map((equipment) => (
            <li key={equipment} className="dropdown__list-element">
              {equipment}
            </li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </details>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Dropdown;
