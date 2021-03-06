import React, { useEffect, useState } from "react";

import StoreContext from "../store";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("THEME") || "light";
    themeSet(theme);
  }, []);

  const changeTheme = (theme) => {
    themeSet(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    if (!theme) return;
    const $html = document.querySelector("html");
    $html.classList.remove("light");
    $html.classList.remove("dim");
    $html.classList.remove("dark");
    $html.classList.add(theme.toString());
  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
