import { Wrapper } from "./styles";
import { TitleParamsType } from "./types";

function Title({ children, ...other }: Readonly<TitleParamsType>) {
  return <Wrapper {...other}>{children}</Wrapper>;
}

export { Title };
