/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../utils/protocols";
import { multiSelectTypes } from "../shared/form/form-components";

type TopicsSelectParamsType = {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  defaultOptions?: multiSelectTypes.OptionsType;
  handleChange: CallbackType;
  [key: string]: any;
};

type HandleChangeTopicsParamsType = multiSelectTypes.OptionsType;

export type { TopicsSelectParamsType, HandleChangeTopicsParamsType };
