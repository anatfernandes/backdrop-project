import { Reaction } from "../../models";

type ListCommentsByPostParamsType = string[];

type ListCommentsByPostResultType = { data: Reaction[] | null };

export type { ListCommentsByPostResultType, ListCommentsByPostParamsType };
