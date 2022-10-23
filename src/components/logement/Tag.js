import React from "react";
import "./tag.css";
import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return <div className="tag">{children}</div>;
};

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tag;
