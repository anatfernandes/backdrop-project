/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../../../services/entities";

type FollowParamsType = {
  user: UserType;
  tab: string;
  [key: string]: any;
};

type UsersType = UserType[];

export type { FollowParamsType, UsersType };
