import React from "react";
import styles from "./photo.module.css";
import cn from "classnames";

function Photo({
  src = "https://pbs.twimg.com/profile_images/1519382263514939392/qzWiJ9Pu_400x400.jpg",
  alt,
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt}></img>
    </div>
  );
}

export default Photo;
