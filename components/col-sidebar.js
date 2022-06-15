import React from "react";
import styles from "./col-sidebar.module.css";
import cn from "classnames";

import TweetModal from "./tweet-modal";
import TabletTweetIcon from "./icons/TabletTweetIcon";
import Navigation from "./navigation";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";

function Sidebar({ flat }) {
  const [isShowModal, isShowModalSet] = React.useState(false);

  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => isShowModalSet(true)}>
          {flat ? <TabletTweetIcon /> : "Tweet"}
        </ThemeButton>
      </div>

      {/* tweet-popup*/}

      {isShowModal && <TweetModal onClick={() => isShowModalSet(false)} />}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Sidebar;
