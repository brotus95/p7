import React from "react";
import Logo from "../../assets/images/logo/logo_footer.svg";
import styles from "./Footer.module.css";

/**
 * @returns {JSX.Element} Footer Component
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="logo Kasa"></img>
      <div className={styles["footer__info"]}>
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
