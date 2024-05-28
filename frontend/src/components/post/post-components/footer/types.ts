/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType } from "../../../../services/entities";
import { CallbackType } from "../../../../utils/protocols";

type FooterParamsType = {
  post: PostType;
  comments: number;
  handleShowComments: CallbackType;
  [key: string]: any;
};

export type { FooterParamsType };
