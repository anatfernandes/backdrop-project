import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/requests/api/mutations";
import { useLocalStorage, useLocale } from "../../hooks";
import { Icon, Popover } from "../shared";
import { Wrapper } from "./styles";
import { EventParamsType, EventType } from "./types";

function Footer() {
  const { t } = useLocale();
  const { localStorageData: user } = useLocalStorage();
  const { handleLogout } = useLogout();

  function logout(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    handleLogout();
  }

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

        <Popover local="top">
          <button id="settings">
            <Icon type="menu" title={t("Pages.Settings")} />
          </button>

          <ul className="popover__content">
            <li tabIndex={0} onClick={logout} onKeyUp={logout}>
              {t("SignOut.SignOut")}
            </li>
          </ul>
        </Popover>
      </nav>
    </Wrapper>
  );
}

export { Footer };
