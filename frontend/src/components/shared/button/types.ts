/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonType = "primary" | "secondary";

type ButtonParamsType = {
  children: React.ReactNode;
  type?: ButtonType;
  loading?: boolean;
  rounded?: boolean;
  width: string;
  margin: string;
  radius: string;
  padding: string;
  [key: string]: any;
};

type WrapperStylePropsType = {
  $width: string;
  $margin: string;
  $radius: string;
  $padding: string;
  $buttonType: ButtonType;
};

export type { ButtonParamsType, WrapperStylePropsType };
