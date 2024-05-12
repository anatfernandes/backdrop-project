import { Button as SharedButton } from "../../../index";
import { ButtonParamsType, ConfigType } from "./types";
import { Wrapper } from "./styles";

function Button({ children, type = "primary", loading, ...other }: ButtonParamsType) {
  let config: ConfigType = {
    width: "100px",
    padding: "5px 1.5rem",
    margin: "0",
    rounded: false,
    loading,
  };

  if (type === "secondary") {
    config = {
      ...config,
      width: "100%",
      padding: undefined,
      rounded: true,
    };
  }

  if (type === "primary-rounded") {
    config = {
      ...config,
      rounded: true,
    };
  }

  return (
    <Wrapper {...other}>
      <SharedButton {...config}>{children}</SharedButton>
    </Wrapper>
  );
}

export { Button };
