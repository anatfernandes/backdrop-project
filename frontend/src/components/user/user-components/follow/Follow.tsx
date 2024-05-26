import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { truncate } from "lodash";
import { useLocale } from "../../../../hooks";
import { Avatar, NoData } from "../../../shared";
import { UserCard, Wrapper } from "./styles";
import { FollowParamsType, UsersType } from "./types";

function Follow({ user, tab, ...other }: Readonly<FollowParamsType>) {
  const { t } = useLocale();
  const [users, setUsers] = useState<UsersType>([]);

  useEffect(() => {
    let currentUsers: UsersType = [];

    if (tab === "following") currentUsers = user.following;
    if (tab === "followers") currentUsers = user.followed;

    setUsers(currentUsers);
  }, [tab, user.id, user.following, user.followed]);

  return (
    <Wrapper {...other}>
      {!users.length && <NoData id="no-data">{t("Profile.NoData.Users")}</NoData>}

      {users.map((currentUser) => (
        <UserCard key={currentUser.id}>
          <Avatar user={currentUser} />

          <div id="user">
            <Link to={`/users/${currentUser.id}`}>
              <h2>{currentUser.name}</h2>
            </Link>

            <p>{truncate(currentUser.about, { length: 70 })}</p>
          </div>
        </UserCard>
      ))}
    </Wrapper>
  );
}

export { Follow };
