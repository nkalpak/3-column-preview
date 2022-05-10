import React from "react";
import styles from "./typography.module.css";

export default function Typography() {
  return (
    <div className={styles.typographyStyle}>
      <h2 className={styles.headerStyle}>SEDANS</h2>
      <p className={styles.bodyStyle}>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
    </div>
  );
}

//<h2 className={styles.headerStyle}>SUVS</h2>
//       <p className={styles.bodyStyle}>
//         Take an SUV for its spacious interior, power and versatility. Perfect for
//your next family vacation and off-road adventures.
//       </p>

//<h2 className={styles.headerStyle}>LUXURY</h2>
//       <p className={styles.bodyStyle}>
//         Cruise in the best car brands without the bloated prices. Enjoy the enhanced
//comfort of a luxury rental and arrive in style.
//       </p>
