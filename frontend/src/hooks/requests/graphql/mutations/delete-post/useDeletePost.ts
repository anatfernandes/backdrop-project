import { useMutation } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useLocale, useToast } from "../../../../index";
import { MutationCommomParamsType } from "./types";
import { POSTS } from "../../queries/list-home-posts/gql/list-home-posts-query";
import { DELETE_POST } from "./gql/delete-post-query";

const defaultCallback = () => null;

function useDeletePost({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const { t } = useLocale();
  const [save] = useMutation(DELETE_POST);
  const toast = useToast();

  function handleDeletePost(post: string) {
    return save({
      variables: {
        data: { post },
      },
      refetchQueries: [POSTS],
      onError: (error) => {
        const text = getGraphqlError(error);
        const title = t("Post.Delete.@Submit.Error");

        toast({ text, title, type: "error" });
        onError();
      },
      onCompleted() {
        toast({ text: t("Post.Delete.@Submit.Success"), type: "success" });
        onSuccess();
      },
    });
  }

  return { handleDeletePost };
}

export { useDeletePost };
