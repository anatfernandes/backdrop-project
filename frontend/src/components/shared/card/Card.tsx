import { CardParamsType, CardDividerParamsType } from "./types";
import { Wrapper, Divider } from "./styles";

function Card({ children, config = {}, ...other }: Readonly<CardParamsType>) {
  const options = {
    $width: "100%",
    $margin: "0",
    ...config,
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
