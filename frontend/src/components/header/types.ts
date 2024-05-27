type EventParamsType =
  | React.MouseEvent<HTMLLIElement | HTMLElement, MouseEvent>
  | React.KeyboardEvent<HTMLLIElement | HTMLElement>;

type EventType = { key: string } & EventParamsType;

export type { EventParamsType, EventType };
