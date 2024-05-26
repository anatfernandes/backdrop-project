/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../../../../services/entities";

type TimelineParamsType = {
  user: UserType;
  [key: string]: any;
};

type EventParamsType =
  | React.MouseEvent<HTMLLIElement>
  | React.KeyboardEvent<HTMLLIElement>;

type EventType = { key: string } & EventParamsType;

export type { TimelineParamsType, EventParamsType, EventType };
