/* eslint-disable @typescript-eslint/no-explicit-any */
type IconType = "home"
  | "search"
  | "menu"
  | "notification"
  | "person"
  | "comment"
  | "reload"
  | "send"
  | "minus"
  | "plus"
  | "continue"
  | "return"
  | "visible"
  | "invisible"
  | "letter"
  | "compass"
  | "dots"
  | "bookmarks"
  | "settings"
  | "google"
  | "heart"
  | "heart-full"
  | "down-arrow"
  | "up-arrow";

type IconParamsType = {
  [key: string]: any;
  type: IconType;
};

export type { IconParamsType };
