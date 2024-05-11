import { themesTypes } from "../../styles";
import { CallbackType } from "../../utils/protocols";

type ThemeContextType = {
  theme: themesTypes.ThemeType;
  handleChangeTheme: CallbackType;
  setAppTheme: CallbackType;
} | null;

type ReducerAction = {
  type: ThemeNameType;
};

type ThemeNameType = themesTypes.ThemeNameType;
type ThemeType = themesTypes.ThemeType;

export type { ThemeContextType, ReducerAction, ThemeNameType, ThemeType };
