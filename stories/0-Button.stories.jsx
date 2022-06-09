import React from "react";

import Button from "../components/button";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";
import NavButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import { Home } from "../components/icons";
import TextTitle from "../components/text-title";

export default {
  title: "Buttons",
};

export const Normal = () => <Button>Save</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
);
export const NavigationButton = () => (
  <NavButton>
    <Home /> <TextTitle>Home</TextTitle>
  </NavButton>
);
export const Nav = () => <Navigation selectedKey="home" />;
