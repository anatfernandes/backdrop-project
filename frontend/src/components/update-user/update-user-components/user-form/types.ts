/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType, TopicType } from "../../../../services/entities";

type UserFormParamsType = {
  user: UserType;
  redirect?: boolean;
  [key: string]: any;
};

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
