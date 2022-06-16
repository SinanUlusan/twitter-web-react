import React from "react";

import Photo from "../photo/index";
import Stack from "../stack/index";
import Close from "../icons/Close";
import IconButton from "../button/icon";
import ThemeButton from "../theme-button/index";
import styles from "./style.module.css";

function TweetModal({ onModalClose = () => {}, onClick = () => {} }) {
  const [tweet, tweetSet] = React.useState("");

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweet }),
      });
      if (response.status !== 200) throw "Tweet gönderilemedi.";

      tweetSet("");
      onModalClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              rows="4"
              placeholder="What's happening?"
              value={tweet}
              onChange={(e) => tweetSet(e.target.value)}
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton onClick={onSubmit}>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default TweetModal;
