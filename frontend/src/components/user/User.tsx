import { Details, Header, Timeline } from "./user-components";
import { Wrapper } from "./styles";
import { UserParamsType } from "./types";

function User({ user }: Readonly<UserParamsType>) {
  return (
    <Wrapper>
      <Header user={user} />

      <Details user={user} />

      <Timeline user={user} />
    </Wrapper>
  );
}

export { User };
