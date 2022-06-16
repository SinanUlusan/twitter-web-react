import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Button from "../components/button/index";
import ThemeButton from "../components/theme-button/index";
import Stack from "../components/stack/index";
import NavButton from "../components/navigation/button";
import Navigation from "../components/navigation/index";
import { Home } from "../components/icons";
import TextTitle from "../components/text/title";

export default {
  title: "Buttons",
  decorators: [withKnobs],
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
export const Nav = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};
