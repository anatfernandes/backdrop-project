import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { CommentsQueryResult } from "./gql/types";
import { ListCommentsParamsType } from "./types";
import { COMMENTS } from "./gql/list-comments-query";

function useListComments({ post }: ListCommentsParamsType) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error } = useQuery<CommentsQueryResult>(COMMENTS, {
    fetchPolicy: "no-cache",
    variables: {
      data: { post },
    },
  });

  if (error) {
    toast({ text: t("Post.Comment.List.Error"), type: "error" });
  }

  return {
    comments: data?.comments ?? [],
    loading,
    error,
  };
}

export { useListComments };
