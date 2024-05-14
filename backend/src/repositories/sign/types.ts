import { FullUser, User } from "../../models";

type CreateUserParamsType = Omit<FullUser, "id">;

type FindUserResultType = { data: User[] | null };

export type { CreateUserParamsType, FindUserResultType };
