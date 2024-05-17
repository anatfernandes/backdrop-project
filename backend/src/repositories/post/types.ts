import { Query, QueryValue } from "fauna";
import { Post } from "../../models";

type CreatePostParamsType = Omit<Post, "id">;

type QueryType = QueryValue | Query;

export type { CreatePostParamsType, QueryType };
