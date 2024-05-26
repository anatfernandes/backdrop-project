import { UserType, TopicType } from "../../../../services/entities";

type UserFormParamsType = { user: UserType };

type UserToUpdate = Pick<
  UserType,
  "name" | "email" | "avatar" | "background" | "about"
> & {
  topics: string[];
};

type HandleUpdateParamsType = (string | undefined)[];

type HandleChangeParamsType = React.ChangeEvent<HTMLTextAreaElement>;

export type {
  TopicType,
  UserFormParamsType,
  UserToUpdate,
  HandleUpdateParamsType,
  HandleChangeParamsType,
};
