import { Comment } from "../../models";

type ListCommentsByPostParamsType = string[];

type ListCommentsByPostResultType = { data: Comment[] | null };

type CreateCommentParamsType = Omit<Comment, "id">;

export type {
  ListCommentsByPostResultType,
  ListCommentsByPostParamsType,
  CreateCommentParamsType,
};
