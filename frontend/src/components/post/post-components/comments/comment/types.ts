/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommentType } from "../../../../../services/entities";

type CommentParamsType = {
  comment: CommentType;
  [key: string]: any;
};

export type { CommentParamsType };
