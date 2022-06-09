import React from "react";
import NavButton from "./navigation-button";
import TextTitle from "./text-title";
import styles from "./navigation.module.css";
import {
  Bookmark,
  Explore,
  Home,
  Lists,
  Notification,
  Messages,
  More,
  Profile,
  Twitter,
} from "./icons";

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === "home"}>
        <Home /> <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "explore"}>
        <Explore /> <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton notify={17} selected={selectedKey === "notification"}>
        <Notification /> <TextTitle>Notification</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "messages"}>
        <Messages /> <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "bookmarks"}>
        <Bookmark /> <TextTitle>Bookmarks</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "lists"}>
        <Lists /> <TextTitle>Lists</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "profile"}>
        <Profile /> <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === "more"}>
        <More /> <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  );
}

export default Navigation;
