import { Loading } from "../index";
import { ButtonParamsType } from "./types";
import { Wrapper } from "./styles";

function Button({
  children,
  type,
  rounded,
  loading,
  ...other
}: Readonly<ButtonParamsType>) {
  const loadingColor = type === "primary" ? "var(--primary)" : "var(--white)";
  const config = {
    $width: other.width ?? "100%",
    $padding: other.padding ?? "7px",
    $margin: other.margin ?? "0 auto",
    $radius: rounded ? "50px" : "3px",
    $buttonType: type ?? "primary",
  };

  return (
    <Wrapper {...config} {...other}>
      {loading ? <Loading size="small" margin="0" color={loadingColor} /> : children}
    </Wrapper>
  );
}

export { Button };
