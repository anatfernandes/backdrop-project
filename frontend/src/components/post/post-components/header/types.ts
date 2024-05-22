/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType, UserType } from "../../../../services/entities";

type HeaderParamsType = {
  post: PostType;
  [key: string]: any;
};

type OwnerType = UserType;

export type { HeaderParamsType, OwnerType };
