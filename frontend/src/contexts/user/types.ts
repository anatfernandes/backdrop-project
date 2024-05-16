import { SetState } from "../../utils/protocols";
import { localStorageTypes } from "../../hooks";

type UserType = Omit<localStorageTypes.LocalStorageType, "theme" | "lang">;

type UserContextType = {
  user: UserType;
  setUser: SetState<UserType>;
} | null;

export type { UserContextType, UserType };
