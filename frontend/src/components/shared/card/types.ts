/* eslint-disable @typescript-eslint/no-explicit-any */
type CardStyleConfigType = Partial<WrapperPropsType>;

type CardParamsType = {
  children: React.ReactNode;
  config?: CardStyleConfigType;
  [key: string]: any;
};

type CardDividerParamsType = {
  margin?: string;
  [key: string]: any;
};

type WrapperPropsType = {
  $width: string;
  $margin: string;
};

type DividerPropsType = {
  $margin: string;
};

export type { CardParamsType, CardDividerParamsType, WrapperPropsType, DividerPropsType };
