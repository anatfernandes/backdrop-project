/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../utils/protocols";

type FormType = {
  [key: string]: any;
};

type ValidationType = {
  rules: boolean[];
  message: string;
};

type ValidateFormParamType = ValidationType[];

type HandleChangeEventParamType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type HandleFormEventParamType = React.FormEvent<HTMLFormElement>;

export type {
  CallbackType,
  FormType,
  HandleFormEventParamType,
  HandleChangeEventParamType,
  ValidateFormParamType
};
