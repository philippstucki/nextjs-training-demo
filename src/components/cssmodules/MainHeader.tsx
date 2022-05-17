import React from "react";
import styles from "./MainHeader.module.css";

// console.log(styles);

export const MainHeader = (props: { children?: React.ReactNode }) => (
  <h1 className={styles.mainHeader}>{props.children}</h1>
);
