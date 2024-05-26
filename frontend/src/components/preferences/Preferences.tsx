import { Wrapper } from "./styles";
import { Language, Themes } from "./preferences-components";

function Preferences() {
  return (
    <Wrapper>
      <Themes />
      <Language />
    </Wrapper>
  );
}

export { Preferences };
