import i18next from "i18next";
import en from "../../locales/en/global.json";
import pt from "../../locales/pt/global.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: { global: en },
    pt: { global: pt },
  },
});

export { i18next };
