import React from "react";

import styles from "./style.module.css";
import cn from "classnames";

import Photo from "../photo/index";
import ArrowBottom from "../icons/ArrowBottom";
import Button from "../button/index";
import TextBody from "../text/body";

function ProfileBox({
  flat = false,
  name = "Sinanis Scott",
  slug = "sinanisscott",
}) {
  return (
    <Button className={cn([styles.box])}>
      <Photo size={39} />
      {!flat && (
        <>
          <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
          </div>
          <ArrowBottom className={styles.icon} />
        </>
      )}
    </Button>
  );
}

export default ProfileBox;
