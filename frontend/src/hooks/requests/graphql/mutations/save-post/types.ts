import { PostType } from "../../../../../services/entities";
import { MutationCommomParamsType } from "../type";

type SavePostParamsType = MutationCommomParamsType & { type?: "create" | "update" };

type HandleSavePostParamsType = Pick<
  PostType,
  "content" | "topics" | "links" | "locale"
> & {
  id?: string;
};

export type { SavePostParamsType, HandleSavePostParamsType, MutationCommomParamsType };
