import { useLocale, useTheme } from "../../../../hooks";
import { Wrapper } from "./styles";
import { EventParamsType, EventType } from "./types";

function Themes() {
  const { t } = useLocale();
  const { theme, handleChangeTheme } = useTheme();

  function getClassName(themeName: string) {
    return theme.name === themeName ? "selected" : "";
  }

  function changeTheme(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    handleChangeTheme(event.currentTarget.id);
  }

  return (
    <Wrapper>
      <h2>{t("Settings.Preferences.Themes.Themes")}</h2>

      <ul>
        <li
          id="light"
          tabIndex={0}
          className={getClassName("light")}
          onClick={changeTheme}
          onKeyUp={changeTheme}
        >
          {t("Settings.Preferences.Themes.Light")}
        </li>

        <li
          id="dark"
          tabIndex={0}
          className={getClassName("dark")}
          onClick={changeTheme}
          onKeyUp={changeTheme}
        >
          {t("Settings.Preferences.Themes.Dark")}
        </li>
      </ul>
    </Wrapper>
  );
}

export { Themes };
