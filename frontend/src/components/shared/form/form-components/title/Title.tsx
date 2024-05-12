import { Wrapper } from "./styles";

function Title({ children, ...other }: Readonly<React.PropsWithChildren>) {
  return <Wrapper {...other}>{children}</Wrapper>;
}

export { Title };
