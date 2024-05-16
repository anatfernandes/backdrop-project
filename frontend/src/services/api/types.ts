/* eslint-disable @typescript-eslint/no-explicit-any */
import { FullUserType } from "../entities";

type UpsertRequestParamsType = { path: string; body?: any; haveResponse?: boolean };

type PostSignUpParamsType = Pick<
  FullUserType,
  "name" | "username" | "email" | "avatar" | "password"
>;

type PostSignInParamsType = Pick<FullUserType, "email" | "password">;

export type { UpsertRequestParamsType, PostSignUpParamsType, PostSignInParamsType };
