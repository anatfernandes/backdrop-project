import { CardParamsType, CardDividerParamsType } from "./types";
import { Wrapper, Divider } from "./styles";

function Card({ children, ...other }: Readonly<CardParamsType>) {
  const options = {
    $width: other.width ?? "100%",
    $margin: other.margin ?? "0",
  };

  return (
    <Wrapper {...other} {...options}>
      {children}
    </Wrapper>
  );
}

Card.Divider = ({ margin }: CardDividerParamsType) => {
  return <Divider $margin={margin ?? "1rem 0"}></Divider>;
};

export { Card };
