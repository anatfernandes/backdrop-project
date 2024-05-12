/* eslint-disable @typescript-eslint/no-explicit-any */
import { modalBaseTypes } from "./modal-types";

type ModalConfigOptionsType = modalBaseTypes.ModalConfigOptionsType;

type ModalType = "delete-post";

type ModalParamsType = {
  type: ModalType;
} & modalBaseTypes.ModalTypesCommonParamsType;

export type { ModalParamsType, ModalType, ModalConfigOptionsType };
