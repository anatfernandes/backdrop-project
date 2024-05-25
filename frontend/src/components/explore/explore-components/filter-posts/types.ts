/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../utils/protocols";
import { iconTypes } from "../../../shared";

type FilterPostsParamsType = {
  handleChangeFilterPosts: CallbackType;
  loading?: boolean;
  [key: string]: any;
};

type ConfigType = {
  show: boolean;
  icon: iconTypes.IconType;
};

type FilterFormType = {
  locale: string;
  topics: string[];
};

type EventParamsType = React.ChangeEvent<HTMLInputElement>;

export type { FilterPostsParamsType, FilterFormType, ConfigType, EventParamsType };
