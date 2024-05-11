import { availableLocales } from "../index";

function getUserLocale() {
  const userLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
  const userFormattedLocales = userLocales.map((locale) => locale.split(/-|_/)[0].trim());

  return userFormattedLocales.find((locale) => availableLocales[locale]) || "en";
}

export { getUserLocale };
