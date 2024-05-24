import { Comment, Post, Reaction, Saved } from "../../models";
import * as listPostsType from "../../repositories/post/types";

type ListPostsSortByType = listPostsType.ListPostsSortByType;
type ListPostsSortDirectionType = listPostsType.ListPostsSortDirectionType;

type ListPostsContextType = "home";

type CreatePostParamsType = Pick<
  Post,
  "owner" | "content" | "locale" | "topics" | "links"
>;

type CreateCommentParamsType = Pick<Comment, "post" | "user" | "message">;

type EditPostParamsType = Partial<Post> & {
  id: string;
  user: string;
};

type TogglePostReactionParamsType = Pick<Reaction, "user" | "post" | "type"> & {
  value: boolean;
};

type ToggleSavePostParamsType = Pick<Saved, "user" | "post"> & {
  value: boolean;
};

type ListsPostsParamsType = {
  user: string;
  context?: ListPostsContextType;
  limit: number;
  page: number;
  sort: listPostsType.ListsPostsSortParamsType;
  where: listPostsType.ListsPostsWhereParamsType;
};

type DeletePostParamsType = {
  user: string;
  post: string;
};

export type {
  Post,
  ListPostsContextType,
  ListsPostsParamsType,
  CreatePostParamsType,
  CreateCommentParamsType,
  EditPostParamsType,
  TogglePostReactionParamsType,
  ToggleSavePostParamsType,
  ListPostsSortByType,
  ListPostsSortDirectionType,
  DeletePostParamsType,
};
