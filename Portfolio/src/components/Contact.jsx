import React from "react";
import styles from "./Contact.module.css";
import Footer from "./Footer";

export const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <p className={styles.p1}>Get in Touch</p>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactinfouppercontainer}>
        <div className={styles.contactinfocontainer}>
          <img
            src="email.png"
            alt="Email icon"
            className={styles.emailicon}
          />
          <p>
            <a 
              href="mailto:martinfukss@gmail.com" 
              className={styles.a} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              martinfukss@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.contactinfocontainer}>
          <img
            src="linkedin n.png"
            alt="LinkedIn icon"
            className={styles.contacticon}
          />
          <p>
            <a 
              href="https://www.linkedin.com/in/martin-fuks-251b91141/" 
              className={styles.a} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};
