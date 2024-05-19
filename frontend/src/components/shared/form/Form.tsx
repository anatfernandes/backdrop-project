import { Button, FloatInputSection, InputSection, MultiSelect, Title } from "./form-components";
import { FormParams } from "./types";
import { Wrapper } from "./styles";

function Form({ children, onSubmit, ...other }: Readonly<FormParams>) {
  return (
    <Wrapper onSubmit={onSubmit} {...other}>
      {children}
    </Wrapper>
  );
}

Form.Title = Title;

Form.FloatInputSection = FloatInputSection;

Form.InputSection = InputSection;

Form.Button = Button;

Form.MultiSelect = MultiSelect;

export { Form };
