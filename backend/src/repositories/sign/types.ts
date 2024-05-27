import { Query, QueryValue } from "fauna";
import { Follow, FullUser, Session, User } from "../../models";

type CreateUserParamsType = Omit<FullUser, "id">;

type CreateSessionParamsType = Omit<Session, "id">;

type UpdateUserParamsType = Omit<FullUser, "id" | "password" | "topics"> & {
  topics: string[];
};

type FollowUserParamsType = Omit<Follow, "id">;

type FindUserResultType = { data: User[] | null };

type FindFollowResultType = { data: Follow[] | null };

type FindSessionByUserResultType = Session | null;

type DeleteFollowUserParamsType = {
  followed: string;
  follower: string;
};

type QueryType = QueryValue | Query;

export type {
  CreateUserParamsType,
  CreateSessionParamsType,
  UpdateUserParamsType,
  FollowUserParamsType,
  FindSessionByUserResultType,
  FindFollowResultType,
  FindUserResultType,
  DeleteFollowUserParamsType,
  QueryType,
};
