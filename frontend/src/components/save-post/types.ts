import { HandleSavePostParamsType } from "../../hooks/requests/graphql/mutations/save-post/types";

type HandleUpdateContentParamsType = React.ChangeEvent<HTMLTextAreaElement>;

type HandleUpdateParamsType = (string | undefined)[];

type CreatePostDataType = HandleSavePostParamsType;

export type { HandleUpdateContentParamsType, HandleUpdateParamsType, CreatePostDataType };
