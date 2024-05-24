import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { getGraphqlError } from "../../../../utils";
import { PostsQueryResult } from "./gql/types";
import { ListPostsParamsType } from "./types";
import { POSTS } from "./gql/list-posts-query";

function useListPosts({ page = 1, limit = 20 }: ListPostsParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error, refetch } = useQuery<PostsQueryResult>(POSTS, {
    variables: {
      data: {
        page,
        limit,
        sort: {
          by: "date",
          direction: "desc",
        },
        where: {
          locale: "",
          users: [],
          topics: [],
        },
      },
    },
    onError: (error) => {
      const title = t("Post.List.Error");
      const text = getGraphqlError(error);
      toast({ text, title, type: "error" });
    },
  });

  function handleRefetchPosts(newVariables: ListPostsParamsType) {
    refetch({ data: { ...newVariables } });
  }

  return {
    posts: data?.posts ?? [],
    loading,
    error,
    handleRefetchPosts,
  };
}

export { useListPosts };
