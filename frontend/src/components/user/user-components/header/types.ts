/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../../../services/entities";

type HeaderParamsType = {
  user: UserType;
  [key: string]: any;
};

type WrapperStyleType = {
  $background: string;
};

export type { HeaderParamsType, WrapperStyleType };
