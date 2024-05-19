import { useEffect, useRef, useState } from "react";
import { Loading } from "../../../index";
import { Wrapper } from "./styles";
import {
  HandleSelectEventType,
  HandleSelectParamsType,
  MappedDefaultValuesType,
  MultiSelectParamsType,
  OptionsType,
  UpdateOptionsParamsType,
} from "./types";

function MultiSelect({
  label,
  placeholder,
  loading = false,
  disabled = false,
  required = false,
  options = [],
  defaultOptions = [],
  optionKey = "id",
  optionLabelKey = "name",
  handleChange,
  ...other
}: Readonly<MultiSelectParamsType>) {
  const [values, setValues] = useState(options);
  const [selectedValues, setSelectedValues] = useState<OptionsType>([]);
  const initialDefaultOptions = useRef<OptionsType>([]);

  useEffect(() => {
    if (initialDefaultOptions.current?.length) return;

    const mappedDefaultValues: MappedDefaultValuesType = {};

    defaultOptions.forEach((option) => (mappedDefaultValues[option[optionKey]] = true));

    const formattedValues = options.map((value) => ({
      ...value,
      selected: mappedDefaultValues[value[optionKey]] ?? false,
    }));

    setValues(formattedValues);
    setSelectedValues(formattedValues.filter((value) => value.selected));

    initialDefaultOptions.current = formattedValues;
  }, [options, defaultOptions, optionKey]);

  function getSelectedValues() {
    return selectedValues
      .map((value) => value[optionLabelKey])
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
  }

  function updateSelectedOptions({ isSelected, value }: UpdateOptionsParamsType) {
    let options = [];

    if (!isSelected) {
      const option = values.find((option) => option[optionKey] === value);
      options = [...selectedValues, option!];
    } else {
      options = selectedValues.filter((option) => option[optionKey] !== value);
    }

    setSelectedValues(options);
    handleChange(options);
  }

  function updateOptions({ isSelected, value }: UpdateOptionsParamsType) {
    const options = values.map((option) =>
      option[optionKey] === value ? { ...option, selected: !isSelected } : option,
    );

    setValues(options);
  }

  function handleSelect(e: HandleSelectParamsType) {
    const event = e as HandleSelectEventType;

    if (event.type !== "click" && event.key !== "Enter") return;

    const { id: value, className } = event.currentTarget;
    const isSelected = className === "selected";

    updateSelectedOptions({ isSelected, value });
    updateOptions({ isSelected, value });
  }

  return (
    <Wrapper {...other}>
      <label id="multiselect-label" htmlFor="multiselect">
        {label}
      </label>

      <section id="custom-multiselect">
        <input
          id="multiselect"
          name="multiselect"
          type="list"
          role="combobox"
          aria-haspopup="listbox"
          aria-controls="options"
          aria-expanded
          readOnly
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          value={getSelectedValues()}
        />
        <ul id="options" role="listbox">
          {loading && (
            <li id="loading" className="disabled">
              <Loading size="small" />
            </li>
          )}

          {!loading &&
            !!values?.length &&
            values.map((value) => (
              <li
                role="option"
                tabIndex={0}
                key={value[optionKey]}
                id={value[optionKey]}
                aria-selected={value.selected}
                className={value.selected ? "selected" : ""}
                onClick={handleSelect}
                onKeyUp={handleSelect}
              >
                {value[optionLabelKey]}
              </li>
            ))}
        </ul>
      </section>
    </Wrapper>
  );
}

export { MultiSelect };
