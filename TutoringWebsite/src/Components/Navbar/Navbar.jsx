import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon-image.png";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={`${styles.header}`}>
      <header className="app-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <div className={`${styles.logo}`}>
            <img
              src={icon}
              alt="a woman with her hair wrapped in curls"
              className={`${styles.logoIcon}`}
            />
            <Link className={`${styles.logoText} ${styles.navLink}`}>
              <span className={`${styles.green}`}>After</span>
              <span className={`${styles.red}`}>S</span>
              <span className={`${styles.blue}`}>-Cool</span>
            </Link>
          </div>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About Me
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/services" className={`${styles.navLink}`}>
                Services
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/signup" className={`${styles.navLink}`}>
                <button className={`${styles.buttonHero}`}>Sign Up</button>
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
