type ThemeType = {
  name: ThemeNameType;
  colors: {
    white: string;
    lightGray: string;
    darkGray: string;
    black: string;
    primary: string;
    secondary: string;
    red: string;
  };
};

type ThemeNameType = "light";

type ThemesType = {
  [theme in ThemeNameType]: ThemeType;
};

export type { ThemeType, ThemeNameType, ThemesType };
