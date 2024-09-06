import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2024 Martin Fuks | <a href="mailto:martinfukss@gmail.com" className={styles.contact}>Contacto</a> | 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;