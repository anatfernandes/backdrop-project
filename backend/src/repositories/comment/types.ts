import { Comment, Reaction } from "../../models";

type ListCommentsByPostParamsType = string[];

type ListCommentsByPostResultType = { data: Reaction[] | null };

type CreateCommentParamsType = Omit<Comment, "id">;

export type {
  ListCommentsByPostResultType,
  ListCommentsByPostParamsType,
  CreateCommentParamsType,
};
