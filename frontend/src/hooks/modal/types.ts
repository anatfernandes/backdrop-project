import { modalTypes } from "../../components/shared";

type ModalType = modalTypes.ModalType;

type ReducerActionType = {
  type: "state" | "type";
  value: boolean | ModalType;
};

type ModalConfigType = {
  type: ModalType;
} & modalTypes.ModalConfigOptionsType;

type ModalReducerType = React.Reducer<ModalConfigType, ReducerActionType>;

export type { ModalType, ReducerActionType, ModalConfigType, ModalReducerType };
