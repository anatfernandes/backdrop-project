import { User } from "../../models";

type EditUserParamsType = Partial<Omit<User, "id" | "topics">> & {
  user: string;
  topics: string[];
};

type EditUserData = Omit<User, "id" | "topics"> & {
  topics: string[];
};

type ToggleFollowUserParamsType = {
  value: boolean;
  followed: string;
  follower: string;
};

export type { User, EditUserParamsType, EditUserData, ToggleFollowUserParamsType };
