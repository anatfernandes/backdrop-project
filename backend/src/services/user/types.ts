import { User } from "../../models";

type EditUserParamsType = Partial<Omit<User, "id" | "topics">> & {
  user: string;
  topics: string[];
};

type EditUserData = Omit<User, "id" | "topics"> & {
  topics: string[];
};

export type { User, EditUserParamsType, EditUserData };
