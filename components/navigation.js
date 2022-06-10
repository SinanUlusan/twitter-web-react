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
  HomeFill,
  ExplorerFill,
  NotificationFill,
  MessagesFill,
  BookmarkFill,
  ListsFill,
  ProfileFill,
} from "./icons";

const MENU = [
  {
    key: "twitter",
    icon: <Twitter />,
    title: "",
    notify: 0,
  },
  {
    key: "home",
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "notification",
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: "Notification",
    notify: 17,
  },
  {
    key: "messages",
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: "Messages",
    notify: 0,
  },
  {
    key: "bookmarks",
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: "Bookmarks",
    notify: 0,
  },
  {
    key: "lists",
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: "Lists",
    notify: 0,
  },
  {
    key: "profile",
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    icon: <More />,
    title: "More",
    notify: 0,
  },
];

function Navigation({ flat = false, selectedKey = "home" }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = selectedKey === menu.key;
        return (
          <NavButton key={menu.key} notify={menu.notify} selected={selected}>
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
}

export default Navigation;
