import React from "react";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div id="profile" className={styles.profilesection}>
      <div className={styles.text}>
        <p className={styles.textp1}>Hello, I'm</p>
        <h1 className={styles.title}>Martin Fuks</h1>
        <p className={styles.textp2}>Frontend Developer</p>
        <div className={styles.btncontainer}>
          <button
            className={styles.btn}
            onClick={() => window.open("./Martin Fuks CV English.pdf")}
          >
            Download CV
          </button>
          <button
            className={styles.btn2}
            onClick={() => (location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div className={styles.socials}>
          <img
            src="/linkedin.png"
            alt="My Linkedin"
            className={styles.icon}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/martin-fuks-251b91141/",
                "_blank"
              )
            }
          />
          <img
            src="/github.png"
            alt="My Github"
            className={styles.icon}
            onClick={() =>
              window.open("https://github.com/Frujiloja/", "_blank")
            }
          />
        </div>
      </div>
      <div className={styles.pic}>
        <img src="perfil.png" alt="Martin Fuks profile picture" />
      </div>
      <img
        src="arrow c.png"
        alt="arrow pic"
        className={styles.iconarrow}
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
};
