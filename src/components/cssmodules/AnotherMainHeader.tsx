import React from "react";
import styles from "./AnotherMainHeader.module.css";

// console.log(styles);

export const AnotherMainHeader = (props: { children?: React.ReactNode }) => (
  <h1 className={styles.mainHeader}>{props.children}</h1>
);
