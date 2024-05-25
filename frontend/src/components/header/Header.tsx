import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useLocalStorage, useLocale } from "../../hooks";
import { Icon } from "../shared";
import { Wrapper } from "./styles";

function Header() {
  const { t } = useLocale();
  const { localStorageData: user } = useLocalStorage();

  return (
    <Wrapper>
      <img src={logo} alt="Our Cause's Logo" />

      <section>
        <section id="search" tabIndex={0} title={t("Search.Search")}>
          <Icon type="search" title={t("Search.Search")} />
        </section>

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

          <Link to="/notifications" title={t("Pages.Notifications")}>
            <Icon type="notification" title={t("Pages.Notifications")} />
          </Link>

          <Link to={`/user/${user.id}`} title={t("Pages.Profile")}>
            <Icon type="person" title={t("Pages.Profile")} />
          </Link>

          <Link to="/settings/profile" title={t("Pages.Settings")}>
            <Icon type="settings" title={t("Pages.Settings")} />
          </Link>
        </nav>
      </section>
    </Wrapper>
  );
}

export { Header };
