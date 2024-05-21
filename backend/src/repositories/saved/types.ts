import { Saved } from "../../models";

type ListSavedByUserParamsType = string[];

type ListSavedByUserResultType = { data: Saved[] | null };

export type { ListSavedByUserResultType, ListSavedByUserParamsType };
