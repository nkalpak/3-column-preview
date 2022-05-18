import React from "react";
import styles from "./button.module.css";

export default function Button({ buttonColor }) {
  return (
    <button
      className={styles.buttonStyle}
      style={{
        color: buttonColor,
      }}
    >
      Learn More
    </button>
  );
}
