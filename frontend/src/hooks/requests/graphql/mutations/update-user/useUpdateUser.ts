import { useMutation } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useToast, useLocale } from "../../../../index";
import { HandleUpdateUserParamsType, MutationCommomParamsType } from "./types";
import { USER_FOR_UPDATE } from "../../queries/find-user/gql/users-query";
import { UPDATE_USER } from "./gql/update-user-query";

const defaultCallback = () => null;

function useUpdateUser({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const [save, { loading }] = useMutation(UPDATE_USER);

  function handleUpdateUser(data: HandleUpdateUserParamsType) {
    return save({
      variables: { data },
      refetchQueries: [USER_FOR_UPDATE],
      onError: (error) => {
        const text = getGraphqlError(error);
        const title = t("User.Update.@Submit.Error");

        toast({ text, title, type: "error" });
        onError();
      },
      onCompleted() {
        toast({ text: t("User.Update.@Submit.Success"), type: "success" });
        onSuccess();
      },
    });
  }

  return { handleUpdateUser, loading };
}

export { useUpdateUser };
