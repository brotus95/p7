//import react
import React from "react";

//import css & assets
import Logo from "../../assets/images/logo/logo_footer.svg";
import styles from "./Footer.module.css";

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
