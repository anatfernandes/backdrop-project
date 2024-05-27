/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../../../services/entities";
import { CallbackType } from "../../../../utils/protocols";

type UsersParamsType = {
  users: UserType[];
  loading: boolean;
  handleSetSearchUsers: CallbackType;
  [key: string]: any;
};

export type { UsersParamsType };
