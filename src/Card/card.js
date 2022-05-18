import React from "react";
import Button from "../Button/button";
import styles from "./card.module.css";

export default function Card({
  backgroundColor,
  imgSource,
  title,
  content,
  borderRadius,
}) {
  return (
    <>
      <div
        className={styles.cardStyle}
        style={{
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}
      >
        <img src={imgSource} alt="car image" />
        <h2 className={styles.headerStyle}>{title}</h2>
        <p className={styles.bodyStyle}>{content}</p>
        <Button buttonColor={ButtonColor(backgroundColor)} />
      </div>
    </>
  );
}

function ButtonColor(backgroundColor) {
  let buttonColor;

  if (backgroundColor === "hsl(31, 77%, 52%)") {
    buttonColor = "hsl(31, 77%, 52%)";
  }

  if (backgroundColor === "hsl(184, 100%, 22%)") {
    buttonColor = "hsl(184, 100%, 22%)";
  }

  if (backgroundColor === "hsl(179, 100%, 13%)") {
    buttonColor = "hsl(179, 100%, 13%)";
  }

  return buttonColor;
}
