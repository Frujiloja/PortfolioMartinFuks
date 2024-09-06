import React, { useState } from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const [currentImage4, setCurrentImage4] = useState(0);
  const [currentImage5, setCurrentImage5] = useState(0);

  const images1 = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  const images2 = ["5.jpg", "6.jpg", "7.jpg"];
  const images3 = ["8.jpg", "9.jpg", "10.jpg"];
  const images4 = ["11.jpg", "12.jpg", "13.jpg"];
  const images5 = ["14.jpg", "15.jpg"];

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

  const nextImage3 = () => {
    setCurrentImage3((prevIndex) => (prevIndex + 1) % images3.length);
  };

  const prevImage3 = () => {
    setCurrentImage3((prevIndex) =>
      prevIndex === 0 ? images3.length - 1 : prevIndex - 1
    );
  };

  const nextImage4 = () => {
    setCurrentImage4((prevIndex) => (prevIndex + 1) % images4.length);
  };

  const prevImage4 = () => {
    setCurrentImage4((prevIndex) =>
      prevIndex === 0 ? images4.length - 1 : prevIndex - 1
    );
  };

  const nextImage5 = () => {
    setCurrentImage5((prevIndex) => (prevIndex + 1) % images5.length);
  };

  const prevImage5 = () => {
    setCurrentImage5((prevIndex) =>
      prevIndex === 0 ? images5.length - 1 : prevIndex - 1
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
            {/* <h2 className={styles.subtitle}>Inox Style</h2> */}
            <p className={styles.p}>
              Web Design, Layout, and Development for an Automotive Services and
              Products Company.
            </p>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage1}>
                {"<"}
              </button>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://inoxstyle.com.ar/", "_blank")
                }
              >
                Visit Website
              </button>
              <button className={styles.nextBtn} onClick={nextImage1}>
                {">"}
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
            {/* <h2 className={styles.subtitle}>Strings & Keys</h2> */}
            <p className={styles.p}>
              Ecommerce Development and Design for a Musical Instrument Store.
              Front, Back & DB.
            </p>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage2}>
                {"<"}
              </button>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://github.com/Frujiloja/STRINGSANDKEYSFRONT", "_blank")
                }
              >
                Github
              </button>
              <button className={styles.nextBtn} onClick={nextImage2}>
                {">"}
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images3[currentImage3]}
              alt={`project 3`}
              className={styles.projectimage}
            />
            {/* <h2 className={styles.subtitle}>Wonder Toys</h2> */}
            <p className={styles.p}>
              Ecommerce Development and Design for a Toys Store. Front, Back &
              DB.
            </p>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage3}>
                {"<"}
              </button>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://github.com/Frujiloja/juguetesfront", "_blank")
                }
              >
                Github
              </button>
              <button className={styles.nextBtn} onClick={nextImage3}>
                {">"}
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images4[currentImage4]}
              alt={`project 4`}
              className={styles.projectimage}
            />
            {/* <h2 className={styles.subtitle}>Wonder Toys</h2> */}
            <p className={styles.p}>
            Simple Website Design and Development for a Sneakers Company.
            </p>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage4}>
                {"<"}
              </button>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://example.com/project3", "_blank")
                }
              >
                Github
              </button>
              <button className={styles.nextBtn} onClick={nextImage4}>
                {">"}
              </button>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className={styles.projectcolor}>
          <div className={styles.articlecontainer}>
            <img
              src={images5[currentImage5]}
              alt={`project 5`}
              className={styles.projectimage}
            />
            {/* <h2 className={styles.subtitle}>Wonder Toys</h2> */}
            <p className={styles.p}>
            Simple Website Design and Development for a Bio Page.
            </p>
            <div className={styles.btncontainer}>
              <button className={styles.prevBtn} onClick={prevImage5}>
                {"<"}
              </button>
              <button
                className={styles.btncolor}
                onClick={() =>
                  window.open("https://example.com/project3", "_blank")
                }
              >
                Github
              </button>
              <button className={styles.nextBtn} onClick={nextImage5}>
                {">"}
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
