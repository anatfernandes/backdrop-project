import { FullUser } from "../../models";

type PostSignUpParamsType = Pick<FullUser, "name" | "username" | "email" | "avatar" | "password">;

export type { PostSignUpParamsType };
