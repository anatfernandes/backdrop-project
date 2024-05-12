/* eslint-disable @typescript-eslint/no-explicit-any */
type CursorType = "default" | "pointer";

type UserType = {
  username: string;
  avatar?: string;
};

type AvatarParamsType = {
  user: UserType;
  size?: "normal" | "small" | "large";
  cursor?: CursorType;
  [key: string]: any;
};

type WrapperPropsType = {
  $size: string;
	$color: string;
	$image?: string;
	$fontSize: string;
  $cursor: CursorType;
};

export type { AvatarParamsType, WrapperPropsType };
