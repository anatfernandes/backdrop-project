import { Wrapper } from "./styles";

function Popover({ children }: Readonly<React.PropsWithChildren>) {
  return <Wrapper>{children}</Wrapper>;
}

export { Popover };
