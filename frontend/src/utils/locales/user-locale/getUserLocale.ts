import { availableLocales } from "../index";

function getLocaleFromLocalStorage() {
  return JSON.parse(localStorage.getItem("our-cause.com") ?? "{}")?.lang;
}

function getLocalesFromNavigator() {
  const userLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
  return userLocales.map((locale) => locale.split(/-|_/)[0].trim());
}

function getUserLocale() {
  const storageLocale = getLocaleFromLocalStorage();

  if (storageLocale && availableLocales[storageLocale]) return storageLocale;

  return getLocalesFromNavigator().find((locale) => availableLocales[locale]) || "en";
}

export { getUserLocale };
