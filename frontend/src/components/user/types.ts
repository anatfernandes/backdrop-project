/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../services/entities";

type UserParamsType = {
  user: UserType;
  [key: string]: any;
};

export type { UserParamsType };
