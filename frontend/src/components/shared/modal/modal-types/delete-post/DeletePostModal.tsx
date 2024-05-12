import { useLocale } from "../../../../../hooks";
import { ModalBase } from "../modal-base";
import { DeletePostModalParamsType } from "./types";

function DeletePostModal({ config, callback }: Readonly<DeletePostModalParamsType>) {
  const { t } = useLocale();

  return (
    <ModalBase
      config={config}
      callback={callback}
      title={t("Modal.DeletePost.Title")}
      trigger={t("Common.Delete")}
      content={
        <section id="content">
          <p>{t("Modal.DeletePost.Message")}</p>
          <p>
            <strong>{t("Common.Attention")}:</strong> {t("Modal.DeletePost.Warning")}
          </p>
        </section>
      }
    />
  );
}

export { DeletePostModal };
