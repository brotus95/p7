import React from "react";
import styles from "./Banner.module.css";
import homeImg from "../../assets/images/home/banner.png";
import aboutImg from "../../assets/images/about/background.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();
  if (pathname === "/")
    return (
      <section className={styles["banner height-limiter"]}>
        <img src={homeImg} alt="Falaise donnant sur la mer" />
        <h1>{"Chez vous,\npartout et ailleurs"}</h1>
      </section>
    );
  if (pathname === "/about")
    return (
      <section className={styles.banner}>
        <img src={aboutImg} alt="Lac et fôret en montagne" />
        <h1 className={styles.hidden}>A propos de nous</h1>
      </section>
    );
};

export default Banner;
