import { AvatarParamsType } from "./types";
import { Wrapper } from "./styles";

function Avatar({
  user,
  size = "normal",
  cursor = "default",
  ...other
}: Readonly<AvatarParamsType>) {
  const avatarSize = {
    small: 32,
    normal: 46,
    large: 94,
  }[size];
  const config = {
    $cursor: cursor,
    $color: getColor(),
    $size: `${avatarSize}px`,
    $fontSize: `${avatarSize * 0.02}rem`,
    $image: `url(${user.avatar})`,
  };

  function getInitials() {
    return user.username
      .split(/[\s-_]+/)
      .map((name) => name[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  }

  function getColor() {
    let hash = 0;

    user.username.split("").forEach((_, index) => {
      hash = (hash << 8) - hash + user.username.charCodeAt(index);
      hash |= 0;
    });

    return "#" + Math.abs(hash).toString(16).slice(0, 6);
  }

  return (
    <Wrapper {...config} {...other}>
      {!user.avatar && getInitials()}
    </Wrapper>
  );
}

export { Avatar };
