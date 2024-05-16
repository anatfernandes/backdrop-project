/* eslint-disable @typescript-eslint/no-explicit-any */
type CallbackType = (...params: any) => any;

type SetState<Type> = React.Dispatch<React.SetStateAction<Type>>;

export type { CallbackType, SetState };
