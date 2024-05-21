import { Query, QueryValue } from "fauna";
import { Post } from "../../models";

type ListPostsSortByType = "date" | "like";
type ListPostsSortDirectionType = "asc" | "desc";

type ListsPostsSortParamsType = {
  by: ListPostsSortByType;
  direction: ListPostsSortDirectionType;
};

type ListsPostsWhereParamsType = {
  locale: string;
  users: string[];
  topics: string[];
};

type ListsPostsParamsType = {
  limit: number;
  offset: number;
  sort: ListsPostsSortParamsType;
  where: ListsPostsWhereParamsType;
};

type ListPostsResultType = { data: Post[] | null };

type CreatePostParamsType = Omit<Post, "id">;

type QueryType = QueryValue | Query;

export type {
  ListPostsSortByType,
  ListPostsSortDirectionType,
  ListsPostsSortParamsType,
  ListsPostsWhereParamsType,
  ListsPostsParamsType,
  ListPostsResultType,
  CreatePostParamsType,
  QueryType,
};
