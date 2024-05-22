/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType } from "../../../../services/entities";

type LinksParamsType = {
  post: PostType;
  [key: string]: any;
};

export type { LinksParamsType };
