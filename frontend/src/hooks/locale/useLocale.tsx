import { useTranslation } from "react-i18next";

function useLocale() {
  const [t, i18n] = useTranslation("global");

  function setLocale(lang: string) {
    i18n.changeLanguage(lang);
  }

  return { t, setLocale };
}

export { useLocale };
