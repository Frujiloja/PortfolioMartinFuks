import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <p className={styles.t1}>Get To Know More</p>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.container}>
        <div className={styles.pic}>
          <img
            src="perfil.png"
            alt="Profile Picture"
            className={styles.aboutpic}
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.aboutcontainer}>
            <div className={styles.detailcontainer}>
              <img
                src="experience.png"
                alt="experience icon"
                className={styles.icon}
              />
              <h3>Experience</h3>
              <p className={styles.text}>+1 year - Frontend Development</p>
              <p className={styles.text}>+2 years - Designer</p>
            </div>
            <div className={styles.detailcontainer}>
              <img
                src="education.png"
                alt="education icon"
                className={styles.icon}
              />
              <h3>Education</h3>
              <p className={styles.text}>
                Full Stack Developer <br />
                3D & 2D Animation <br /> Graphic Design
              </p>
            </div>
          </div>
          <div className={styles.text}>
            <p>
              I combine my passion for design with my experience as a full-stack
              programmer. My solid background in design uniquely melds with my
              ability to code innovative and effective solutions. From an early
              age, I've been captivated by technology and coding, fostering a
              deep and enduring interest in the field.
            </p>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow pic"
        className={styles.iconarrow}
        onClick={() =>
          document
            .getElementById("experience")
            .scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
};
