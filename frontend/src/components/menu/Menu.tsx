import { Link } from "react-router-dom";
import { useLocale } from "../../hooks";
import { Icon } from "../shared";
import { Wrapper } from "./styles";
import { PagesType } from "./types";

function Menu() {
  const { t } = useLocale();
  const pages: PagesType = [
    {
      label: t("Settings.Profile.Profile"),
      path: "profile",
      icon: "person",
    },
    {
      label: t("Settings.Preferences.Preferences"),
      path: "preferences",
      icon: "settings",
    },
  ];

  return (
    <Wrapper>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.path}>
              <Link to={`/settings/${page.path}`} title={page.label}>
                <div id="option">
                  <Icon type={page.icon} title={page.label} color="var(--white)" />
                  <span>{page.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
}

export { Menu };
