import { Avatar } from "../../../shared";
import { Wrapper } from "./styles";
import { HeaderParamsType } from "./types";

function Header({ user, ...other }: Readonly<HeaderParamsType>) {
  return (
    <Wrapper $background={user.background} {...other}>
      <div id="content">
        <Avatar user={user} size="large" />
      </div>
    </Wrapper>
  );
}

export { Header };
