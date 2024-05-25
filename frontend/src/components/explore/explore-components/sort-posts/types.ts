/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../utils/protocols";
import { iconTypes } from "../../../shared";

type SortPostsParamsType = {
  handleChangeSortPosts: CallbackType;
  [key: string]: any;
};

type SortOptionType = {
  label: string;
  value: { by: string; direction: string };
  icon: iconTypes.IconType;
};

type SortOptionsType = SortOptionType[];

type EventParamsType =
  | React.MouseEvent<HTMLLIElement, MouseEvent>
  | React.KeyboardEvent<HTMLLIElement>;

type EventType = { key: string } & EventParamsType;

export type { SortPostsParamsType, SortOptionsType, EventParamsType, EventType };
