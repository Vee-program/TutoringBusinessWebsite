import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${style.card}`}>
      <img src={props.image} className={`${style.subjectImage}`} />
      <p className={`${style.subjectTitle}`}>{props.title}</p>
    </div>
  );
};

export default Card;
