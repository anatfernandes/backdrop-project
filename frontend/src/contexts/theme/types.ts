/* eslint-disable @typescript-eslint/no-explicit-any */
import { themesTypes } from "../../styles";
import { CallbackType } from "../../utils/protocols";
import { localStorageTypes } from "../../hooks";

type ThemeContextType = {
  theme: themesTypes.ThemeType;
  handleChangeTheme: CallbackType;
  setAppTheme: CallbackType;
} | null;

type ReducerAction = {
  type: ThemeNameType;
};

type GetDefaultThemeParamsType = {
  localStorageData: localStorageTypes.LocalStorageType;
  addInLocalStorage: CallbackType;
  [key: string]: any;
};

type ThemeNameType = themesTypes.ThemeNameType;
type ThemeType = themesTypes.ThemeType;

export type {
  ThemeContextType,
  ReducerAction,
  ThemeNameType,
  ThemeType,
  GetDefaultThemeParamsType
};
