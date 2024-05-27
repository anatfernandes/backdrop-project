import { Link } from "react-router-dom";
import { useLocale } from "../../../../hooks";
import { Avatar, Loading, NoData } from "../../../shared";
import { Wrapper } from "./styles";
import { UsersParamsType } from "./types";

function Users({
  users,
  loading,
  handleSetSearchUsers,
  ...other
}: Readonly<UsersParamsType>) {
  const { t } = useLocale();

  return (
    <Wrapper {...other}>
      {loading && <Loading size="small" />}

      {!users.length && !loading && <NoData id="no-data">{t("Search.NoData")}</NoData>}

      <ul>
        {users.map((user) => (
          <li>
            <Link to={`/users/${user.id}`} onClick={() => handleSetSearchUsers(false)}>
              <Avatar size="small" cursor="pointer" user={user} />

              <div id="user">
                <span id="name">{user.name}</span>
                <span>@{user.username}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export { Users };
