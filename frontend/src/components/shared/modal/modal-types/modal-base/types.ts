/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../../utils/protocols";

type ModalBaseParamsType = {
  title: string;
  trigger: string;
  content: React.ReactElement<any, any>;
  config: ModalConfigType;
  callback: CallbackType;
  [key: string]: any;
};

type ModalConfigType = {
  modalConfig: ModalConfigOptionsType;
  handleCloseModal: CallbackType;
};

type ModalConfigOptionsType = {
  isOpen: boolean;
  [key: string]: any;
};

type ModalTypesCommonParamsType = {
  config: ModalConfigType;
  callback: CallbackType;
};

export type {
  ModalBaseParamsType,
  ModalConfigType,
  ModalConfigOptionsType,
  ModalTypesCommonParamsType,
};
