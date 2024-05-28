import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { PostsQueryResult } from "./gql/types";
import { ListHomePostsParamsType } from "./types";
import { POSTS } from "./gql/list-home-posts-query";

function useListHomePosts({ page = 1, limit = 20 }: ListHomePostsParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error, refetch } = useQuery<PostsQueryResult>(POSTS, {
    fetchPolicy: "network-only",
    variables: {
      data: {
        context: "home",
        page,
        limit,
      },
    },
  });

  if (error) {
    toast({ text: t("Post.List.Error"), type: "error" });
  }

  function handleLoadMore(variables: ListHomePostsParamsType) {
    refetch({ data: { ...variables, context: "home" } });
  }

  return {
    posts: data?.posts ?? [],
    loading,
    error,
    handleLoadMore,
  };
}

export { useListHomePosts };
