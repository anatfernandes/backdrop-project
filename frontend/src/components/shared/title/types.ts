type AlignType = "start" | "center" | "end";

type TitleParamsType = {
  align?: AlignType;
} & React.PropsWithChildren;

type WrapperPropsType = {
  $align: AlignType;
};

export type { TitleParamsType, WrapperPropsType };
