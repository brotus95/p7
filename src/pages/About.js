import React from "react";
import Banner from "../components/home/Banner";
import Dropdown from "../components/about/Dropdown";
import aboutData from "../datas/about";
import "../styles/about.css";

/**
 * @returns {JSX.Element} About Page JSX
 */
const About = () => {
  return (
    <main className="about-page">
      <Banner />
      {aboutData.map((item, index) => (
        <Dropdown key={item[0] + index} title={item[0]} description={item[1]} />
      ))}
    </main>
  );
};

export default About;
