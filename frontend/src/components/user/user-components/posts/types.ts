/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType, UserType } from "../../../../services/entities";

type PostsParamsType = {
  user: UserType;
  tab: string;
  [key: string]: any;
};

type PostsType = PostType[];

export type { PostsParamsType, PostsType };
