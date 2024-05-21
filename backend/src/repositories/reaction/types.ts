import { Reaction } from "../../models";

type ListReactionsByPostParamsType = string[];

type ListReactionsByPostResultType = { data: Reaction[] | null };

export type { ListReactionsByPostResultType, ListReactionsByPostParamsType };
