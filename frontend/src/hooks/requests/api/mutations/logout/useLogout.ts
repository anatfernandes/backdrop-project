import { useNavigate } from "react-router-dom";
import { api } from "../../../../../services";
import { useLocalStorage, useLocale, useToast } from "../../../../index";
import { MutationCommomParamsType } from "../types";

const defaultCallback = () => null;

function useLogout({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { clearLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  async function handleLogout() {
    return api
      .postSignOut()
      .then(() => {
        onSuccess();

        clearLocalStorage();
        toast({ type: "success", text: t("SignOut.@Submit.Success") });
        navigate("/sign-in");
      })
      .catch((error) => {
        onError();

        toast({
          type: "error",
          text: error?.cause?.message || t("SignOut.@Submit.Error"),
        });
      });
  }

  return { handleLogout };
}

export { useLogout };
