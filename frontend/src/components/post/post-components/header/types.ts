/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostType, UserType } from "../../../../services/entities";
import { CallbackType } from "../../../../utils/protocols";

type HeaderParamsType = {
  post: PostType;
  handleOpenModal: CallbackType;
  [key: string]: any;
};

type OpenModalParamsType =
  | React.MouseEvent<HTMLLIElement, MouseEvent>
  | React.KeyboardEvent<HTMLLIElement>;

type OpenModalEventType = { key: string } & OpenModalParamsType;

type OwnerType = UserType;

export type { HeaderParamsType, OpenModalParamsType, OpenModalEventType, OwnerType };
