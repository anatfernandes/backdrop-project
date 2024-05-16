import logo from "../../assets/logo.svg";
import { SignUp } from "../../components/sign";
import { SignPageParamType } from "./types";
import { Wrapper } from "./style";

function SignPage({ page }: Readonly<SignPageParamType>) {
  return (
    <Wrapper>
      <img id="logo" src={logo} alt="Our Cause's Logo" />
      {page === "sign-up" && <SignUp />}
    </Wrapper>
  );
}

export { SignPage };
