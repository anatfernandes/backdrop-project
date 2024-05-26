/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../../../services/entities";

type DetailsParamsType = {
  user: UserType;
  [key: string]: any;
};

export type { DetailsParamsType };
