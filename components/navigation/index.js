import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./navigation.module.css";
import { MENU } from "../../constants/index";

import NavButton from "./button";
import TextTitle from "../text/title";

function Navigation({ flat = false }) {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0;
        const selected = router.pathname === menu.path;
        return (
          <NavButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={cn(styles.navButton, menu.key)}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavButton>
        );
      })}
    </nav>
  );
}

export default Navigation;