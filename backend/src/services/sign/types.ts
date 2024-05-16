import { FullUser } from "../../models";

type PostSignUpParamsType = Pick<FullUser, "name" | "username" | "email" | "avatar" | "password">;

type PostSignInParamsType = Pick<FullUser, "email" | "password">;

export type { PostSignUpParamsType, PostSignInParamsType, FullUser };
