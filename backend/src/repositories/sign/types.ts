import { Query, QueryValue } from "fauna";
import { FullUser, Session, User } from "../../models";

type CreateUserParamsType = Omit<FullUser, "id">;

type CreateSessionParamsType = Omit<Session, "id">;

type FindUserResultType = { data: User[] | null };

type FindSessionByUserResultType = Session | null;

type QueryType = QueryValue | Query;

export type {
  CreateUserParamsType,
  CreateSessionParamsType,
  FindSessionByUserResultType,
  FindUserResultType,
  QueryType,
};
