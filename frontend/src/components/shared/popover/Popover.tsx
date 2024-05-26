import { Wrapper } from "./styles";
import { PopoverParamsType } from "./types";

function Popover({ children, local = "bottom" }: Readonly<PopoverParamsType>) {
  const config = { $top: "inherit", $bottom: "inherit" };

  if (local === "top") config.$bottom = "15px";
  if (local === "bottom") config.$top = "45px";

  return <Wrapper {...config}>{children}</Wrapper>;
}

export { Popover };
