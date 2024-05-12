import ReactModal from "react-modal";
import { useLocale } from "../../../../../hooks";
import { Card, Button } from "../../../index";
import { ModalBaseParamsType } from "./types";
import { ButtonsSection, Title, Wrapper } from "./styles";

ReactModal.setAppElement("#root");

function ModalBase({
  title,
  content,
  trigger,
  callback,
  config: { modalConfig, handleCloseModal },
}: Readonly<ModalBaseParamsType>) {
  const { t } = useLocale();
  const wrapperStyle = {
    overlay: { zIndex: 15, backgroundColor: "rgba(0, 0, 0, 0.6)" },
  };

  function handleConfirm() {
    callback();
    handleCloseModal();
  }

  return (
    <Wrapper
      isOpen={modalConfig.isOpen}
      onRequestClose={handleCloseModal}
      style={wrapperStyle}
      shouldCloseOnOverlayClick
    >
      <Card>
        <Title>{title}</Title>

        <Card.Divider margin="1rem 0" />

        {content}

        <ButtonsSection>
          <Button
            type="secondary"
            config={{ $margin: "1rem 10px 0 0" }}
            onClick={handleCloseModal}
          >
            {t("Common.Cancel")}
          </Button>

          <Button
            type="primary"
            config={{ $margin: "1rem 0 0 10px" }}
            onClick={handleConfirm}
          >
            {trigger}
          </Button>
        </ButtonsSection>
      </Card>
    </Wrapper>
  );
}

export { ModalBase };
