/* eslint-disable @typescript-eslint/no-explicit-any */
type CardParamsType = {
  children: React.ReactNode;
  width?: string;
  margin?: string;
  [key: string]: any;
};

type CardDividerParamsType = {
  margin?: string;
  [key: string]: any;
};

type WrapperStylePropsType = {
  $width: string;
  $margin: string;
};

type DivisionStylePropsType = {
  $margin: string;
};

export type {
  CardParamsType,
  CardDividerParamsType,
  WrapperStylePropsType,
  DivisionStylePropsType,
};
