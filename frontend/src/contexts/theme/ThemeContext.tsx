import { ThemeProvider } from "styled-components";
import { createContext, useReducer } from "react";
import { useLocalStorage } from "../../hooks";
import { GlobalStyle, themes } from "../../styles";
import {
  ThemeContextType,
  ReducerAction,
  ThemeNameType,
  ThemeType,
  GetDefaultThemeParamsType
} from "./types";

const ThemeContext = createContext<ThemeContextType>(null);

function reducer(_: ThemeType, action: ReducerAction) {
  return themes[action.type] || themes.light;
}

function getDefaultTheme(storageHook: GetDefaultThemeParamsType) {
  if (!storageHook.localStorageData.theme) {
    storageHook.addInLocalStorage({ theme: "light" });
    return themes.light;
  }
  
  if (!storageHook.localStorageData.token) return themes.light;

  return themes[storageHook.localStorageData.theme] || themes.light;
}

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const storageHook = useLocalStorage();
  const [theme, dispatch] = useReducer(reducer, getDefaultTheme(storageHook));

  function handleChangeTheme(theme: ThemeNameType) {
    return dispatch({ type: theme });
  }

  function setAppTheme(theme: ThemeNameType) {
    return dispatch({ type: theme });
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme, setAppTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
