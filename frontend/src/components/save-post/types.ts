import { HandleSavePostParamsType } from "../../hooks/requests/graphql/mutations/save-post/types";
import { PostType, TopicType } from "../../services/entities";

type SavePostParamsType = { defaultPost?: PostType };

type HandleUpdateContentParamsType = React.ChangeEvent<HTMLTextAreaElement>;

type HandleUpdateParamsType = (string | undefined)[];

type CreatePostDataType = HandleSavePostParamsType;

export type {
  TopicType,
  SavePostParamsType,
  HandleUpdateContentParamsType,
  HandleUpdateParamsType,
  CreatePostDataType,
};
