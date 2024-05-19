import { useMutation } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useLocale, useToast, useUser } from "../../../../index";
import { HandleSavePostParamsType, MutationCommomParamsType } from "./types";
import { CREATE_POST } from "./gql/create-post-query";

const defaultCallback = () => null;

function useSavePost({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { user } = useUser();
  const [save] = useMutation(CREATE_POST);

  function handleSavePost(data: HandleSavePostParamsType) {
    return save({
      variables: { data: { ...data, owner: user.id } },
      onError: (error) => {
        const text = getGraphqlError(error);
        const title = t("Post.Save.@Submit.Error");

        toast({ text, title, type: "error" });
        onError();
      },
      onCompleted() {
        toast({ text: t("Post.Save.@Submit.Success"), type: "success" });
        onSuccess();
      },
    });
  }

  return { handleSavePost };
}

export { useSavePost };
