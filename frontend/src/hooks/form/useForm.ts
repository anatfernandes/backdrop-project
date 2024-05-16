import { useState } from "react";
import { useToast } from "../index";
import {
  CallbackType,
  FormType,
  HandleFormEventParamType,
  HandleChangeEventParamType,
  ValidateFormParamType,
  FormOptionsType,
} from "./types";

function useForm(defaultForm = {}, options: FormOptionsType = {}) {
  const [form, setForm] = useState<FormType>(defaultForm);
  const toast = useToast();

  function handleChange(event: HandleChangeEventParamType) {
    const { value, name: key } = event.target;
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validateForm(validations: ValidateFormParamType = []) {
    const error = validations.find((validation) =>
      validation.rules.some((rule) => !rule),
    );

    if (!error) return { isValid: true };

    toast({ text: error.message, type: "warning" });
    return { isValid: false };
  }

  function handleForm(
    event: HandleFormEventParamType,
    callback: CallbackType = () => {},
  ) {
    event.preventDefault();

    if (!options.validations) return callback(form);

    const validate = validateForm(options.validations());

    if (validate.isValid) callback(form);
  }

  function clearForm() {
    setForm({});
  }

  return { form, handleChange, validateForm, handleForm, clearForm };
}

export { useForm };
