import React, { useState } from "react";
import styles from "../components/Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.desktopnav}>
        <a href="#profile">
          <img className={styles.logo} src="logo.png" alt="logo" />
        </a>
        <div className={styles.menu}>
          <ul className={styles.menuitems}>
            <li>
              <a href="#profile">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.burguernav}>
        <a href="#profile">
          <img className={styles.logo} src="logo.png" alt="logo" />
        </a>
        <div className={styles.burguermenu}>
          <div
            className={`${styles.burguericon} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`${styles.menulinks} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a href="#profile">Home</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
