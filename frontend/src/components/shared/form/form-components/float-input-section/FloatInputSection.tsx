import { Wrapper } from "./styles";

function FloatInputSection({ children, ...other }: Readonly<React.PropsWithChildren>) {
  return <Wrapper {...other}>{children}</Wrapper>;
}

export { FloatInputSection };
