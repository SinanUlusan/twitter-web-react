import React from "react";
import styles from "./style.module.css";
import cn from "classnames";

function Photo({
  src = "https://pbs.twimg.com/profile_images/1519382263514939392/qzWiJ9Pu_400x400.jpg",
  alt,
  size = 47,
}) {
  return (
    <div
      className={cn([styles.photo])}
      style={{ width: { size }, height: { size } }}
    >
      <img
        className={styles.img}
        src={src}
        alt={alt}
        width={size}
        height={size}
      ></img>
    </div>
  );
}

export default Photo;
