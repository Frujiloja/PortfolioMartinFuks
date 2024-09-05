import React, { useState } from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const images1 = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const images2 = ["5.jpg", "6.jpg"];

  const nextImage1 = () => {
    setCurrentImage1((prevIndex) => (prevIndex + 1) % images1.length);
  };

  const prevImage1 = () => {
    setCurrentImage1((prevIndex) =>
      prevIndex === 0 ? images1.length - 1 : prevIndex - 1
    );
  };

  const nextImage2 = () => {
    setCurrentImage2((prevIndex) => (prevIndex + 1) % images2.length);
  };

  const prevImage2 = () => {
    setCurrentImage2((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="projects" className={styles.projectscontainer}>
      <p className={styles.p1}>Browse My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        {/* Card 1 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images1[currentImage1]}
              alt={`project ${currentImage1 + 1}`}
              className={styles.projectimage}
            />
            <h2 className={styles.subtitle}>Project One</h2>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage1}>
                {"<"}
              </button>
              <button className={styles.nextBtn} onClick={nextImage1}>
                {">"}
              </button>
            </div>
            <div className={styles.btncontainer}>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://inoxstyle.com.ar/", "_blank")
                }
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images2[currentImage2]}
              alt={`project 2`}
              className={styles.projectimage}
            />
            <h2 className={styles.subtitle}>Project Two</h2>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage2}>
                {"<"}
              </button>
              <button className={styles.nextBtn} onClick={nextImage2}>
                {">"}
              </button>
            </div>
            <div className={styles.btncontainer}>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://example.com/project2", "_blank")
                }
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images2[currentImage2]}
              alt={`project 3`}
              className={styles.projectimage}
            />
            <h2 className={styles.subtitle}>Project Three</h2>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage2}>
                {"<"}
              </button>
              <button className={styles.nextBtn} onClick={nextImage2}>
                {">"}
              </button>
            </div>
            <div className={styles.btncontainer}>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://example.com/project3", "_blank")
                }
              >
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow pic"
        className={styles.iconarrow}
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>
  );
};
