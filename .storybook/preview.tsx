import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/output.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
