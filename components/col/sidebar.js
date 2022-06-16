import React from "react";
import styles from "./sidebar.module.css";
import cn from "classnames";

import TweetModal from "../tweet-modal/index";
import TabletTweetIcon from "../icons/TabletTweetIcon";
import Navigation from "../navigation/index";
import ThemeButton from "../theme-button/index";
import ProfileBox from "../profile-box/index";

function Sidebar({ flat }) {
  const [isShowModal, isShowModalSet] = React.useState(false);

  const onModalClose = () => {
    isShowModalSet(false);
  };
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
          {flat ? <TabletTweetIcon /> : "Tweet"}
        </ThemeButton>
      </div>

      {/* tweet-popup*/}

      {isShowModal && (
        <TweetModal onModalClose={onModalClose} onClick={onModalClose} />
      )}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Sidebar;
