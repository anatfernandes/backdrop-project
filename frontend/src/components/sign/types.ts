import { PostSignUpParamsType } from "../../services";

type SingUpForm = PostSignUpParamsType & { confirmPassword: string };

export type { SingUpForm };
