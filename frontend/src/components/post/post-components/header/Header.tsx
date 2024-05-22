import { Link } from "react-router-dom";
import { translateTopic } from "../../../../utils";
import { useLocale, useDate, useUser } from "../../../../hooks";
import { Avatar, Icon, Popover } from "../../../shared";
import { Options, User, Wrapper } from "./styles";
import { HeaderParamsType, OwnerType } from "./types";

function Header({ post, ...other }: Readonly<HeaderParamsType>) {
  const { t } = useLocale();
  const { user } = useUser();
  const { formatDistanceStrict, dateOptions } = useDate();

  function getDate() {
    return formatDistanceStrict(post.createdAt, new Date(), dateOptions);
  }

  function isOwner(owner: OwnerType) {
    return owner.id === user.id;
  }

  return (
    <Wrapper {...other}>
      <div id="details">
        <Avatar user={post.owner} size="normal" />

        <User>
          <Link to={`/users/${post.owner.username}`}>
            <h2>{post.owner.name}</h2>
          </Link>

          <div id="post-details">
            <span>{getDate()}</span>

            {post.locale && (
              <span id="locale">
                <b>·</b>
                {post.locale}
              </span>
            )}
          </div>

          <ul>
            {post.topics.map((topic) => (
              <li key={topic.name}>{t(translateTopic(topic.name))}</li>
            ))}
          </ul>
        </User>
      </div>

      {isOwner(post.owner) && (
        <Options>
          <Popover>
            <Icon type="dots" title={t("Post.Card.Options")} size={20} tabIndex={0} />

            <ul className="popover__content">
              <li tabIndex={0}>{t("Common.Edit")}</li>
              <li tabIndex={0}>{t("Common.Delete")}</li>
            </ul>
          </Popover>
        </Options>
      )}
    </Wrapper>
  );
}

export { Header };
