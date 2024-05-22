/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType } from "../../services/entities";

type PostParamsType = {
  post: PostType;
  [key: string]: any;
};

export type { PostParamsType };
