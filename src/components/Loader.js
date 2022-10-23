import React from "react";
import ReactDOM from "react-dom";
import "../styles/loader.css";

const LoaderJSX = () => (
  <div className="loader">
    <div className="content">
      <h2>Loading...</h2>
      <div className="loader-circle"></div>
    </div>
  </div>
);
const Loader = () => {
  return (
    <>
      {ReactDOM.createPortal(<LoaderJSX />, document.getElementById("loader"))}
    </>
  );
};

export default Loader;
