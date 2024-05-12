import { useReducer } from "react";
import { ModalConfigType, ModalType, ReducerActionType, ModalReducerType } from "./types";

function reducer(config: ModalConfigType, action: ReducerActionType) {
  const { type, value } = action;

  if (type === "state" && typeof value === "boolean") return { ...config, isOpen: value };
  if (type === "type" && typeof value === "string") return { ...config, type: value };

  return config;
}

function useModal(defaultConfig = {}) {
  const [modalConfig, dispatch] = useReducer<ModalReducerType>(reducer, {
    isOpen: false,
    type: "delete-post",
    ...defaultConfig,
  });

  function setModalType(value: ModalType) {
    dispatch({ type: "type", value });
  }

  function setDeletePostModalType() {
    setModalType("delete-post");
  }

  function handleOpenModal() {
    dispatch({ type: "state", value: true });
  }

  function handleCloseModal() {
    dispatch({ type: "state", value: false });
  }

  return {
    modalConfig,
    setDeletePostModalType,
    handleCloseModal,
    handleOpenModal,
  };
}

export { useModal };
