type EventParamsType =
  | React.MouseEvent<HTMLLIElement, MouseEvent>
  | React.KeyboardEvent<HTMLLIElement>;

type EventType = { key: string } & EventParamsType;

export type { EventParamsType, EventType };
