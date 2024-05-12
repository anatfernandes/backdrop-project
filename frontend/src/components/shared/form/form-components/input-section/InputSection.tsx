import { Wrapper } from "./styles";

function InputSection({ children, ...other }: Readonly<React.PropsWithChildren>) {
  return <Wrapper {...other}>{children}</Wrapper>;
}

export { InputSection };
