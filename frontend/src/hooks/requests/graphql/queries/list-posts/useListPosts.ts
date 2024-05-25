import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { getGraphqlError } from "../../../../utils";
import { PostsQueryResult } from "./gql/types";
import {
  HandleChangeFilterPostsParamsType,
  HandleChangeSortPostsParamsType,
  ListPostsParamsType,
} from "./types";
import { POSTS } from "./gql/list-posts-query";

function useListPosts({ page = 1, limit = 20 }: ListPostsParamsType = {}) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error, variables, refetch } = useQuery<PostsQueryResult>(POSTS, {
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

  function hasActiveFilters() {
    const where = variables?.data?.where ?? {};
    return !!(where.topics?.length || where.users?.length || where.locale);
  }

  function handleRefetchPosts(pagination: ListPostsParamsType) {
    refetch({ data: { ...variables?.data, ...pagination } });
  }

  function handleChangeSortPosts(sort: HandleChangeSortPostsParamsType) {
    refetch({
      data: { ...variables?.data, sort: { ...variables?.data?.sort, ...sort } },
    });
  }

  function handleChangeFilterPosts(where: HandleChangeFilterPostsParamsType) {
    refetch({
      data: { ...variables?.data, where: { ...variables?.data?.where, ...where } },
    });
  }

  return {
    posts: data?.posts ?? [],
    loading,
    error,
    hasActiveFilters,
    handleRefetchPosts,
    handleChangeSortPosts,
    handleChangeFilterPosts,
  };
}

export { useListPosts };
