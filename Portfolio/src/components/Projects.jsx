import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div id="projects" className={styles.projectscontainer}>
      <p className={styles.p1}>Browse My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src="project-1.png"
              alt="project 1"
              className={styles.projectimage}
            />
          <h2 className={styles.subtitle}>Project One</h2>
          <div className={styles.btncontainer}>
            <button
              className={styles.btncolor}
              onClick={() => (location.href = "https://github.com/Frujiloja/")}
            >
              Github
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
