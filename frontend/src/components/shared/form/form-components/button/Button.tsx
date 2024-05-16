import { Button as SharedButton } from "../../../index";
import { ButtonParamsType, ConfigType } from "./types";
import { Wrapper } from "./styles";

function Button({
  children,
  type = "primary",
  loading,
  disabled,
  ...other
}: ButtonParamsType) {
  let buttonConfig: ConfigType = {
    config: {
      $width: "100px",
      $padding: "5px 1.5rem",
      $margin: "0",
    },
    rounded: false,
    loading,
    disabled,
  };

  if (type === "secondary") {
    buttonConfig = {
      ...buttonConfig,
      rounded: true,
      config: {
        ...buttonConfig.config,
        $width: "100%",
        $padding: undefined,
      },
    };
  }

  if (type === "primary-rounded") {
    buttonConfig = {
      ...buttonConfig,
      rounded: true,
    };
  }

  return (
    <Wrapper {...other}>
      <SharedButton {...buttonConfig}>{children}</SharedButton>
    </Wrapper>
  );
}

export { Button };
