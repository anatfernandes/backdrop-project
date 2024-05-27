import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useLogout } from "../../hooks/requests/api/mutations";
import { useLocalStorage, useLocale } from "../../hooks";
import { Icon, Popover } from "../shared";
import { SearchUsers } from "../search-users";
import { Wrapper } from "./styles";
import { EventParamsType, EventType } from "./types";

function Header() {
  const { t } = useLocale();
  const { handleLogout } = useLogout();
  const { localStorageData: user } = useLocalStorage();
  const [isSearching, setIsSearching] = useState(true);
  const navigate = useNavigate();

  function logout(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    handleLogout();
  }

  function navigateToSettings(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    navigate("/settings/profile");
  }

  function toggleSearchUsers(e: EventParamsType) {
    const event = e as EventType;
    if (event.type !== "click" && event.key !== "Enter") return;
    setIsSearching((prev) => !prev);
  }

  function handleSetSearchUsers(value: boolean) {
    setIsSearching(value);
  }

  return (
    <Wrapper>
      {isSearching && <SearchUsers handleSetSearchUsers={handleSetSearchUsers} />}

      <img src={logo} alt="Our Cause's Logo" />

      <section>
        <section
          id="search"
          tabIndex={0}
          title={t("Search.Search")}
          onClick={toggleSearchUsers}
          onKeyUp={toggleSearchUsers}
        >
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

          <Link to={`/users/${user.id}`} title={t("Pages.Profile")}>
            <Icon type="person" title={t("Pages.Profile")} />
          </Link>

          <Popover>
            <button id="settings">
              <Icon type="menu" title={t("Pages.Settings")} />
            </button>

            <ul className="popover__content">
              <li tabIndex={0} onClick={navigateToSettings} onKeyUp={navigateToSettings}>
                {t("Settings.Settings")}
              </li>

              <li tabIndex={0} onClick={logout} onKeyUp={logout}>
                {t("SignOut.SignOut")}
              </li>
            </ul>
          </Popover>
        </nav>
      </section>
    </Wrapper>
  );
}

export { Header };
