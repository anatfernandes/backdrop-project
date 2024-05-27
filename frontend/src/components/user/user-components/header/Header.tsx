import { useState } from "react";
import { useFollowUser } from "../../../../hooks/requests/graphql/mutations";
import { useLocale, useUser } from "../../../../hooks";
import { Avatar, Button } from "../../../shared";
import { Wrapper } from "./styles";
import { HeaderParamsType } from "./types";

function Header({ user, ...other }: Readonly<HeaderParamsType>) {
  const { t } = useLocale();
  const { user: loggedUser } = useUser();
  const { loading, handleFollowUser } = useFollowUser({ onError: updateFollowing });
  const [following, setFollowing] = useState(user.isFollowing);

  function isUser() {
    return user.id === loggedUser.id;
  }

  function updateFollowing(value?: boolean) {
    const isFollowing = value ?? !following;
    setFollowing(isFollowing);
  }

  function handleUpdateFollowing(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.type !== "click" && event.key !== "Enter") return;

    handleFollowUser({ value: !following, followed: user.id });
    updateFollowing();
  }

  return (
    <Wrapper $background={user.background} {...other}>
      <div id="content">
        <Avatar user={user} size="large" />

        {!isUser() && (
          <Button
            disabled={loading}
            type={following ? "secondary" : "primary"}
            config={{ $width: "fit-content", $padding: "0 1rem", $margin: "0" }}
            onClick={handleUpdateFollowing}
            rounded
          >
            {following ? t("User.Unfollow.Unfollow") : t("User.Follow.Follow")}
          </Button>
        )}
      </div>
    </Wrapper>
  );
}

export { Header };
