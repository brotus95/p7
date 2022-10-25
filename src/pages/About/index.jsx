//import react
import React from "react";

//import components
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";

//import css & datas
import aboutData from "../../datas/about";
import styles from "./About.module.css";

/**
 * @returns {JSX.Element} About Page JSX
 */
const About = () => {
  return (
    <main className={styles["about-page"]}>
      <Banner />
      {aboutData.map((item, index) => (
        <Dropdown key={item[0] + index} title={item[0]} description={item[1]} />
      ))}
    </main>
  );
};

export default About;
