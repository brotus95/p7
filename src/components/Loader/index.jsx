import React from "react";
import ReactDOM from "react-dom";
import styles from "./Loader.module.css";

const LoaderJSX = () => (
  <div className={styles.loader}>
    <div className={styles.content}>
      <h2>Loading...</h2>
      <div className={styles["loader-circle"]}></div>
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
