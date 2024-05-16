/* eslint-disable @typescript-eslint/no-explicit-any */
import { buttonTypes } from "../../../index";

type ButtonType = "primary" | "secondary" | "primary-rounded";

type ButtonParamsType = {
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  [key: string]: any;
} & React.PropsWithChildren;

type ConfigType = Partial<buttonTypes.ButtonParamsType>;

export type { ButtonParamsType, ConfigType };
