import { Loading } from "../index";
import { ButtonParamsType } from "./types";
import { Wrapper } from "./styles";

function Button({
  children,
  type,
  rounded,
  loading,
  config = {},
  ...other
}: Readonly<ButtonParamsType>) {
  const loadingColor = type === "primary" ? "var(--primary)" : "var(--white)";
  const defaultConfig = {
    $width: "100%",
    $padding: "7px",
    $margin: "0 auto",
    $radius: rounded ? "50px" : "3px",
    $buttonType: type ?? "primary",
  };

  return (
    <Wrapper {...defaultConfig} {...config} {...other}>
      {loading ? <Loading size="small" margin="0" color={loadingColor} /> : children}
    </Wrapper>
  );
}

export { Button };
