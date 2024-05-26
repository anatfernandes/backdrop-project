import { Query, QueryValue } from "fauna";
import { Follow, FullUser, Session, User } from "../../models";

type CreateUserParamsType = Omit<FullUser, "id">;

type CreateSessionParamsType = Omit<Session, "id">;

type UpdateUserParamsType = Omit<FullUser, "id" | "password" | "topics"> & {
  topics: string[];
};

type FindUserResultType = { data: User[] | null };

type FindFollowResultType = { data: Follow[] | null };

type FindSessionByUserResultType = Session | null;

type QueryType = QueryValue | Query;

export type {
  CreateUserParamsType,
  CreateSessionParamsType,
  UpdateUserParamsType,
  FindSessionByUserResultType,
  FindFollowResultType,
  FindUserResultType,
  QueryType,
};
