import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useTheme } from "../index";
import { ThemesType, ToastParamsType } from "./types";

function useToast() {
  const { theme } = useTheme();
  const themes: ThemesType = {
    light: "light",
  };

  return ({ text, type }: ToastParamsType) => {
    const options = { theme: themes[theme.name] };

    if (type) {
      return toast[type](text, options);
    }

    toast(text, options);
  };
}

export { useToast };
