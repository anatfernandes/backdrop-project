import { Query, QueryValue } from "fauna";
import { Post, Reaction, ReactionType } from "../../models";

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

type ReactPostParamsType = Omit<Reaction, "id">;

type DeletePostReactionParamsType = {
  user: string;
  post: string;
  type: ReactionType;
};

type QueryType = QueryValue | Query;

export type {
  ListPostsSortByType,
  ListPostsSortDirectionType,
  ListsPostsSortParamsType,
  ListsPostsWhereParamsType,
  ListsPostsParamsType,
  ListPostsResultType,
  CreatePostParamsType,
  ReactPostParamsType,
  DeletePostReactionParamsType,
  QueryType,
};
