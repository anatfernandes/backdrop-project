import { useLocale } from "../../../../hooks";
import { Form } from "../../../shared";
import { Wrapper } from "./styles";
import { EventParamsType } from "./types";

function Language() {
  const { t, getCurrentLocale, setLocale } = useLocale();

  function changeLanguage(event: EventParamsType) {
    setLocale(event.target.value);
  }

  return (
    <Wrapper>
      <Form.InputSection>
        <label htmlFor="language">{t("Settings.Preferences.Language.Language")}</label>

        <select
          id="language"
          name="language"
          onChange={changeLanguage}
          defaultValue={getCurrentLocale()}
        >
          <option value="en">{t("Settings.Preferences.Language.Languages.EN")}</option>
          <option value="pt">{t("Settings.Preferences.Language.Languages.PT_BR")}</option>
        </select>
      </Form.InputSection>
    </Wrapper>
  );
}

export { Language };
