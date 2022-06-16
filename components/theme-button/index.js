import React from "react";
import cn from "classnames";
import Button from "../button/index";
import styles from "./style.module.css";
import classNames from "classnames";

function ThemeButton({ className, children, big = false, ...props }) {
  return (
    <Button
      className={cn(
        styles.button,
        styles.light,
        big && styles.bigButton,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ThemeButton;
