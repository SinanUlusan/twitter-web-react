import React from "react";
import cn from "classnames";
import Button from "./button";
import styles from "./theme-button.module.css";
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
