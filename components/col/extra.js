import React from "react";
import styles from "./extra.module.css";
import cn from "classnames";

function Extra({ children }) {
  return <div className={cn([styles.extra])}>{children}</div>;
}

export default Extra;
