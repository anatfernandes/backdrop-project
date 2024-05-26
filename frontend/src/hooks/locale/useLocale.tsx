import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../index";

function useLocale() {
  const [t, i18n] = useTranslation("global");
  const { addInLocalStorage } = useLocalStorage();

  function getCurrentLocale() {
    return i18n.language;
  }

  function setLocale(lang: string) {
    i18n.changeLanguage(lang);
    addInLocalStorage({ lang });
  }

  return { t, getCurrentLocale, setLocale };
}

export { useLocale };
