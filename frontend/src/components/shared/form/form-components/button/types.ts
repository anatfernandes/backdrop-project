import { buttonTypes } from "../../../index";

type ButtonType = "primary" | "secondary" | "primary-rounded";

type ButtonParamsType = {
  type?: ButtonType;
  loading?: boolean;
} & React.PropsWithChildren;

type ConfigType = Partial<buttonTypes.ButtonParamsType>;

export type { ButtonParamsType, ConfigType };
