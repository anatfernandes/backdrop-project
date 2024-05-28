/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../../utils/protocols";

type CommentsParamsType = {
  post: string;
  handleUpdateComments: CallbackType;
  [key: string]: any;
};

export type { CommentsParamsType };
