import React from "react";
import css from "./Hero.module.css";
import image from "../../assets/hero-image.png";
import cap from "../../assets/grad-icon.png";
import laptop from "../../assets/laptop-icon.png";
import pin from "../../assets/location-icon.png";
import book from "../../assets/book-icon.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`${css.hero}`}>
      <div className={`${css.headlines}`}>
        <h1 className={css.heroHeadline}>
          Achive Academic Excellence with Expert Tutoring
        </h1>
        <p className={`${css.heroSubheadline}`}>
          Group and One-on-One Sessions for High School Learners from Grade 8 -
          12 in Physical Sciences, Mathematics,Life Sciences, Natural Sciences
          and CAT
        </p>
      </div>
      <div className={`${css.imageContainer}`}>
        <img
          src={image}
          alt="a student sitting at a table and the tutor standing"
          className={css.heroImage}
        />
      </div>
      <div className={`${css.benefits}`}>
        <h2 className={`${css.benefitsHeader}`}>Key Benefits</h2>
        <ul className={`${css.list}`}>
          <li className={`${css.benefitItem}`}>
            <img
              src={cap}
              className={`${css.icon}`}
              alt="black graduation hat"
            />
            Expert Tutor with Proven Track Records
          </li>
          <li className={`${css.benefitItem}`}>
            <img
              src={laptop}
              className={`${css.icon}`}
              alt="black mac laptop"
            />
            Online or In-person Sessions
          </li>
          <li className={`${css.benefitItem}`}>
            <img src={book} className={`${css.icon}`} alt="black book" />
            Comprehensive Study Materials and Exam Prep
          </li>
        </ul>
        <Link to="/signup">
          <button className={`${css.bookButton}`}>Book Your Session Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
