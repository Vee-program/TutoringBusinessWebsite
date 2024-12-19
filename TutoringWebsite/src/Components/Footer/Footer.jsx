import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${style.footerContainer}`}>
      <footer className={`${style.footer}`}>
        <div className={`${style.topFooter}`}>
          <div className={`${style.addressContainer}`}>
            <p className={`${style.address}`}>
              <ion-icon name="location-outline"></ion-icon>Johannesburg,
              Rosebank
            </p>
            <ul className={`${style.socialIcon}`}>
              <li className={`${style.socialIconItem}`}>
                <a className={`${style.socialIconLink}`} href="#">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
              <li className={`${style.socialIconItem}`}>
                <a
                  className={`${style.socialIconLink}`}
                  href="https://wa.me/0762730184">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li className={`${style.socialIconItem}`}>
                <a className={`${style.socialIconLink}`} href="#">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>
              <li className={`${style.socialIconItem}`}>
                <a className={`${style.socialIconLink}`} href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
            <ul className={`${style.menu}`}></ul>
          </div>
        </div>
        <div className={`${style.bottomFooter}`}>
          <div className={`${style.socialContainer}`}>
            <ul className={`${style.menu}`}>
              <li className={`${style.menuItem}`}>
                <Link className={`${style.menuLink}`} to="/">
                  Home
                </Link>
              </li>
              <li className={`${style.menuItem}`}>
                <Link className={`${style.menuLink}`} to="/about">
                  About Me
                </Link>
              </li>
              <li className={`${style.menuItem}`}>
                <Link className={`${style.menuLink}`} to="/services">
                  Services
                </Link>
              </li>
              <li className={`${style.menuItem}`}>
                <Link className={`${style.menuLink}`} to="/contact">
                  Contact
                </Link>
              </li>
              <li className={`${style.menuItem}`}>
                <Link className={`${style.menuLink}`} to="/book">
                  Book
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${style.copyContainer}`}>
            <p className={`${style.copyright}`}>
              &copy;2024 <span className="green">After</span>
              <span className="red">S</span>
              <span className="blue">-Cool</span>| All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
