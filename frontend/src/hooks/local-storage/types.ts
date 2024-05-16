import { UserType } from "../../services/entities";
import { themesTypes } from "../../styles";

type LocalStorageType = Pick<
  UserType,
  "id" | "name" | "username" | "avatar" | "topics" | "type"
> & {
  token: string;
  lang: string;
  theme: themesTypes.ThemeNameType;
};

export type { LocalStorageType };
