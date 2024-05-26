import { ThemesType } from "./types";

const neutral = {
  white: "#F2F2F2",
  lightGray: "#DFDFDF",
  darkGray: "#808080",
  black: "#210123",
};

const themes: ThemesType = {
  light: {
    name: "light",
    colors: {
      primary: "#6C043C",
      secondary: "#0EC0C1",
      red: "#EB4335",
      gold: "#F5B04B",
      ...neutral,
    },
  },
  dark: {
    name: "dark",
    colors: {
      primary: "#CC006D",
      secondary: "#0EC0C1",
      red: "#EB4335",
      gold: "#F5B04B",
      white: "#272727",
      lightGray: neutral.darkGray,
      darkGray: neutral.lightGray,
      black: neutral.white,
    },
  },
};

export { themes };
