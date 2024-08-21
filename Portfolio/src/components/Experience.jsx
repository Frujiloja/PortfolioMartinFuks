import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <div id="experience" className={styles.experiencecontainer}>
      <p className={styles.p1}>Explore My</p>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.experience}>
        <div className={styles.aboutcontainer}>
          <div className={styles.detailcontainer}>
            <h2 className={styles.experiencesubtitle}>
              Frontend Development
            </h2>
            <div className={styles.articlecontainer}>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>JavaScript</h3>
                  <p className={styles.p2}>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>React</h3>
                  <p className={styles.p2}>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>CSS</h3>
                  <p className={styles.p2}>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>Redux</h3>
                  <p className={styles.p2}>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>Chakra UI</h3>
                  <p className={styles.p2}>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>HTML</h3>
                  <p className={styles.p2}>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className={styles.detailcontainer}>
            <h2 className={styles.experiencesubtitle}>
              Backend Development
            </h2>
            <div className={styles.articlecontainer}>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p className={styles.p2}>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>Node Js</h3>
                  <p className={styles.p2}>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>Express JS</h3>
                  <p className={styles.p2}>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="checkmark.png"
                  alt="experience icon"
                  className={styles.icon}
                />
                <div>
                  <h3>Git</h3>
                  <p className={styles.p2}>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img src="arrow.png" alt="arrow pic" className={styles.iconarrow} onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} />
    </div>
  );
};
