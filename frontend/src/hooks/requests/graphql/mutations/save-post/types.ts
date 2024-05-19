import { PostType } from "../../../../../services/entities";
import { MutationCommomParamsType } from "../type";

type HandleSavePostParamsType = Pick<PostType, "content" | "topics" | "links" | "locale">;

export type { HandleSavePostParamsType, MutationCommomParamsType };
