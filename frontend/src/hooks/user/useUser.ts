import { useContext } from "react";
import { UserContext } from "../../contexts";
import { contextError } from "../utils";

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw contextError("User");
  return context;
}

export { useUser };
