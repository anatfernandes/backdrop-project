import { themesTypes } from "../../styles";

type LocalStorageType = {
  id: number;
  username: string;
  avatar: string;
  token: string;
  lang: string;
  theme: themesTypes.ThemeNameType;
};

export type { LocalStorageType };
