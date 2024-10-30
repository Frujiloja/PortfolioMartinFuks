import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2024 Powered By Martin Fuks | <a href="mailto:martinfukss@gmail.com" className={styles.contact}>Contact</a> | 
          <a href="https://api.whatsapp.com/send/?phone=5491157719725&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.link}>1157719725</a> | 
        </p>
      </div>
    </footer>
  );
};

export default Footer;