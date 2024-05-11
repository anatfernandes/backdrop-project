import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { contextError } from "../utils";

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw contextError("Theme");
  return context;
}

export { useTheme };
