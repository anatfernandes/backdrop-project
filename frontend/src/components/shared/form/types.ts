/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallbackType } from "../../../utils/protocols";

type FormParams = {
  children: React.ReactNode;
  onSubmit: CallbackType;
  [key: string]: any;
};

export type { FormParams };
