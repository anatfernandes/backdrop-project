import { Link } from "react-router-dom";
import { useLocalStorage, useLocale } from "../../hooks";
import { Icon } from "../shared";
import { Wrapper } from "./styles";

function Footer() {
  const { t } = useLocale();
  const { localStorageData: user } = useLocalStorage();

  return (
    <Wrapper>
      <nav>
        <Link to="/home" title={t("Pages.Home")}>
          <Icon type="home" title={t("Pages.Home")} />
        </Link>

        <Link to="/explore" title={t("Pages.Explore")}>
          <Icon type="compass" title={t("Pages.Explore")} />
        </Link>

        <Link to="/post" title={t("Pages.CreatePost")}>
          <Icon type="plus" title={t("Pages.CreatePost")} />
        </Link>

        <Link to={`/users/${user.id}`} title={t("Pages.Profile")}>
          <Icon type="person" title={t("Pages.Profile")} />
        </Link>

        <Link to="/settings/profile" title={t("Pages.Settings")}>
          <Icon type="menu" title={t("Pages.Settings")} />
        </Link>
      </nav>
    </Wrapper>
  );
}

export { Footer };
