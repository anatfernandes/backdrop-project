/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../utils/protocols";

type ListMoreButtonParamsType = {
  type?: "new" | "more";
  loading?: boolean;
  page?: number;
  limit?: number;
  refetch?: boolean
  query: CallbackType;
  handleRefetchConfig?: CallbackType;
  [key: string]: any;
};

export type { ListMoreButtonParamsType };
