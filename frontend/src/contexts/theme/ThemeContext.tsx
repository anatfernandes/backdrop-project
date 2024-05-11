import { ThemeProvider } from "styled-components";
import { createContext, useReducer } from "react";
import { GlobalStyle, themes } from "../../styles";
import { ThemeContextType, ReducerAction, ThemeNameType, ThemeType } from "./types";

const ThemeContext = createContext<ThemeContextType>(null);

function reducer(_: ThemeType, action: ReducerAction) {
  return themes[action.type] || themes.light;
}

function getDefaultTheme() {
  return themes.light;
}

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  const [theme, dispatch] = useReducer(reducer, getDefaultTheme());

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
