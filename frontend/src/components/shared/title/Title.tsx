import { TitleParamsType } from "./types";
import { Wrapper } from "./styles";

function Title({ children, align }: Readonly<TitleParamsType>) {
  return <Wrapper $align={align ?? "center"}>{children}</Wrapper>;
}

export { Title };
