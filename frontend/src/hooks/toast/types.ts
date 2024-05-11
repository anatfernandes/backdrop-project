import { themeTypes } from "../../contexts";

type ToastThemesType = "light";

type ToastTypes = "info" | "success" | "error" | "warning";

type ToastParamsType = {
  text: string;
  type?: ToastTypes;
};

type ThemesType = {
  [name in themeTypes.ThemeNameType]: ToastThemesType;
};

export type { ToastThemesType, ToastTypes, ToastParamsType, ThemesType };
