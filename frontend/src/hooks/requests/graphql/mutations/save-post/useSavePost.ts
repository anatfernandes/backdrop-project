import { useMutation } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useLocale, useToast, useUser } from "../../../../index";
import { HandleSavePostParamsType, SavePostParamsType } from "./types";
import { POSTS } from "../../queries/list-home-posts/gql/list-home-posts-query";
import { CREATE_POST } from "./gql/create-post-query";
import { UPDATE_POST } from "./gql/update-post-query";

const defaultCallback = () => null;

function useSavePost({
  type = "create",
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: SavePostParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { user } = useUser();
  const [save] = useMutation(type === "create" ? CREATE_POST : UPDATE_POST);

  function getVariables(data: HandleSavePostParamsType) {
    if (type === "create") return { ...data, owner: user.id };
    return { ...data, id: data.id };
  }

  function handleSavePost(data: HandleSavePostParamsType) {
    return save({
      variables: { data: getVariables(data) },
      refetchQueries: [POSTS],
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
