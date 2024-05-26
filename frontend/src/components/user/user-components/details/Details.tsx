import { useLocale } from "../../../../hooks";
import { Wrapper } from "./styles";
import { DetailsParamsType } from "./types";

function Details({ user, ...other }: Readonly<DetailsParamsType>) {
  const { t } = useLocale();

  return (
    <Wrapper {...other}>
      <h1>{user.name}</h1>
      <h2>@{user.username}</h2>

      <p>{user.about}</p>

      <div id="follow">
        <span>
          {t("Profile.Following")}: <strong>{user.following.length}</strong>
        </span>

        <b>·</b>

        <span>
          {t("Profile.Followers")}: <strong>{user.followed.length}</strong>
        </span>
      </div>
    </Wrapper>
  );
}

export { Details };
