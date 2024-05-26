import { iconTypes } from "../shared";

type PageType = {
  label: string;
  path: string;
  icon: iconTypes.IconType;
};

type PagesType = PageType[];

export type { PagesType };
