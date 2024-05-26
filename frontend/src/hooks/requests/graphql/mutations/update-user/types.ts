import { UserType } from "../../../../../services/entities";
import { MutationCommomParamsType } from "../type";

type HandleUpdateUserParamsType = Pick<
  UserType,
  "name" | "email" | "avatar" | "background" | "about"
> & {
  topics: string[];
};

export type { HandleUpdateUserParamsType, MutationCommomParamsType };
