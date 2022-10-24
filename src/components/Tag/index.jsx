import React from "react";
import styles from "./Tag.module.css";
import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tag;
