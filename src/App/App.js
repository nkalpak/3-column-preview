import React from "react";
import styles from "./App.module.css";
import Cards from "../3-column-cards/3-column-cards";

export default function App() {
  return (
    <div className={styles.cardsStyle}>
      <Cards />
    </div>
  );
}
