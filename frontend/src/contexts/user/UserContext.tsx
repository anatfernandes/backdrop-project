import { omit } from "lodash";
import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks";
import { UserContextType, UserType } from "./types";

const UserContext = createContext<UserContextType>(null);

function UserContextProvider({ children }: Readonly<React.PropsWithChildren>) {
  const { localStorageData } = useLocalStorage();
  const userData: UserType = omit(localStorageData, ["theme", "lang"]);
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
