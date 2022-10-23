import React from "react";
import { Link, useLocation } from "react-router-dom";

// Logo images
import logo from "../assets/images/logo/logo_header.svg";

import styles from "../styles/Header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const isHomePage = pathname === "/";

  const isHomeLinkActive = () => {
    if (!isAboutPage)
      return isHomePage ? styles.active : styles["active-not-home-page"];
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles["header-wrapper"]}>
        <img src={logo} alt="logo Kasa"></img>
        {/* Nav */}
        <nav>
          <ul className={styles["nav-list"]}>
            <li className={isHomeLinkActive()}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={isAboutPage ? styles.active : ""}>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
