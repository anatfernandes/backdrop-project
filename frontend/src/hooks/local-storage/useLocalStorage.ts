import { LocalStorageType } from "./types";

function useLocalStorage() {
  const storageKey = "our-cause.com";
  const localStorageData = getLocalStorageData();

  function getLocalStorageData() {
    return parse(localStorage.getItem(storageKey));
  }

  function clearLocalStorage() {
    const { theme = "light", lang = "en" } = getLocalStorageData();
    setData({ theme, lang });
  }

  function addInLocalStorage(data: Partial<LocalStorageType>) {
    const localStorageData = getLocalStorageData();
    setData({ ...localStorageData, ...data });
  }

  function setData(data: Partial<LocalStorageType>) {
    localStorage.setItem(storageKey, stringify(data));
  }

  function parse(data: string | null) {
    return JSON.parse(data ?? "{}") as LocalStorageType;
  }

  function stringify(data: Partial<LocalStorageType>) {
    return JSON.stringify(data);
  }

  return { localStorageData, clearLocalStorage, addInLocalStorage };
}

export { useLocalStorage };
