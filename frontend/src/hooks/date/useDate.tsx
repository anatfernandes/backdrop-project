import * as date from "date-fns";
import { ptBR, enUS } from "date-fns/locale";
import { useLocalStorage } from "../local-storage";
import { DateLocalesType } from "./types";

function useDate() {
  const { localStorageData } = useLocalStorage();
  const locales: DateLocalesType = {
    pt: ptBR,
    en: enUS,
  };

  const dateOptions = {
    addSuffix: true,
    locale: locales[localStorageData.lang] ?? enUS,
  };

  return { dateOptions, ...date };
}

export { useDate };
