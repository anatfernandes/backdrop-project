/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../utils/protocols";

type LinksParamsType = {
  handleChange: CallbackType;
  defaultLinks?: string[];
  [key: string]: any;
};

type LinksType = { id: string; value: string }[];

export type { LinksParamsType, LinksType };
