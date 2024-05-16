import { PostSignInParamsType, PostSignUpParamsType } from "../../services";

type SingUpForm = PostSignUpParamsType & { confirmPassword: string };

type SignInForm = PostSignInParamsType;

export type { SingUpForm, SignInForm };
