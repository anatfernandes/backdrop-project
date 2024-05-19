import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useTheme } from "../index";
import { ToastContent } from "./toast-components";
import { ThemesType, ToastParamsType } from "./types";

function useToast() {
  const { theme } = useTheme();
  const themes: ThemesType = {
    light: "light",
  };

  return ({ text, title, type }: ToastParamsType) => {
    const options = { theme: themes[theme.name] };
    const content = <ToastContent text={text} title={title} />;

    if (type) {
      return toast[type](content, options);
    }

    toast(content, options);
  };
}

export { useToast };
