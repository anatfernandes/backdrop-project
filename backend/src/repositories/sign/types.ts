import { Query, QueryValue } from "fauna";
import { FullUser, Session, User } from "../../models";

type CreateUserParamsType = Omit<FullUser, "id">;

type CreateSessionParamsType = Omit<Session, "id">;

type FindUserResultType = { data: User[] | null };

type QueryType = QueryValue | Query;

export type { CreateUserParamsType, CreateSessionParamsType, FindUserResultType, QueryType };
