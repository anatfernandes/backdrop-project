/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../../../utils/protocols";

type OptionType = { id?: string; [key: string]: any };

type OptionsType = OptionType[];

type MultiSelectParamsType = {
  label?: string;
  placeholder?: string;
  optionKey?: string;
  optionLabelKey?: string;
  loading?: boolean;
  disabled?: boolean;
  required?: boolean;
  options?: OptionsType;
  defaultOptions?: OptionsType;
  handleChange: CallbackType;
  [key: string]: any;
};

type UpdateOptionsParamsType = { isSelected: boolean; value: string };

type HandleSelectParamsType =
  | React.MouseEvent<HTMLLIElement, MouseEvent>
  | React.KeyboardEvent<HTMLLIElement>;

type HandleSelectEventType = { key: string } & HandleSelectParamsType;

type MappedDefaultValuesType = { [key: string]: boolean };

export type {
  MultiSelectParamsType,
  UpdateOptionsParamsType,
  HandleSelectParamsType,
  HandleSelectEventType,
  MappedDefaultValuesType,
  OptionsType,
};
