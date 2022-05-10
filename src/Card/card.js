import React from "react";
import Button from "../Button/button";
import styles from "./card.module.css";
import cardimage from "../Images/icon-luxury.svg";

export default function Card() {
  return (
    <div className={styles.cardStyle}>
      <img src={cardimage} alt="image of car" />
      <Typography />
      <Button />
    </div>
  );
}
