import React from "react";
import styles from "./typography.module.css";
import sedanimage from "../Images/icon-sedans.svg";
import suvimage from "../Images/icon-suvs.svg";
import luxuryimage from "../Images/icon-luxury.svg";

// function TypographyContent(props) {
//   if (props.variant === "sedan") {
//     return (
//       <>
//         <div>
//           <img src={sedanimage} alt="sedan image" />
//           <h2 className={styles.headerStyle}>SEDANS</h2>
//           <p className={styles.bodyStyle}>
//             Choose a sedan for its affordability and excellent fuel economy.
//             Ideal for cruising in the city or on your next road trip.
//           </p>
//         </div>
//       </>
//     );
//   }
//
//   if (props.variant === "suv") {
//     return (
//       <>
//         <div>
//           <img src={suvimage} alt="suv image" />
//           <h2 className={styles.headerStyle}>SUVS</h2>
//           <p className={styles.bodyStyle}>
//             Take an SUV for its spacious interior, power, and versatility.
//             Perfect for your next family vacation and off-road adventures.
//           </p>
//         </div>
//       </>
//     );
//   }
//
//   if (props.variant === "luxury") {
//     return (
//       <>
//         <div>
//           <img src={luxuryimage} alt="luxury image" />
//           <h2 className={styles.headerStyle}>LUXURY</h2>
//           <p className={styles.bodyStyle}>
//             Cruise in the best car brands without the bloated prices. Enjoy the
//             enhanced comfort of a luxury rental and arrive in style.
//           </p>
//         </div>
//       </>
//     );
//   }
// }

export default function Typography() {
  return (
    <>
      {/*<TypographyContent />*/}
      {/*<TypographyContent variant="sedan"></TypographyContent>*/}
      {/*<TypographyContent variant="suv"></TypographyContent>*/}
      {/*<TypographyContent variant="luxury"></TypographyContent>*/}
    </>
  );
}
