import { DeletePostModal } from "./modal-types";
import { ModalParamsType } from "./types";

function Modal({ type, config, callback }: Readonly<ModalParamsType>) {
  return (
    <>
      {type === "delete-post" && <DeletePostModal config={config} callback={callback} />}
    </>
  );
}

export { Modal };
