import React from "react";
import style from "./CardReview.module.css";
import avatar from "../../assets/avatar.png";

export default function CardReview({ reviewText, nameUser }) {
  return (
    <div className={style.contentAll}>
      <div className={style.contetInfoUser}>
        <img src={avatar} alt="" />
        <h6>{nameUser}</h6>
      </div>
      <p className={style.reviewText}>{reviewText}</p>
    </div>
  );
}
