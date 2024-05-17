import { Post } from "../../models";

type CreatePostParamsType = Pick<
  Post,
  "owner" | "content" | "locale" | "topics" | "links"
>;

export type { CreatePostParamsType };
