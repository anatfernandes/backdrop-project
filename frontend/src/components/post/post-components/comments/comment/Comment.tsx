import { Link } from "react-router-dom";
import { useDate, useLocale } from "../../../../../hooks";
import { Avatar } from "../../../../shared";
import { Wrapper, Content } from "./styles";
import { CommentParamsType } from "./types";

function Comment({ comment, ...other }: Readonly<CommentParamsType>) {
  const { t } = useLocale();
  const { formatDistanceStrict, dateOptions } = useDate();

  function getDate() {
    return formatDistanceStrict(comment.createdAt, new Date(), dateOptions);
  }

  function commentedByOwner() {
    return comment.user?.id === comment.post?.owner?.id;
  }

  return (
    <Wrapper {...other}>
      <Avatar user={comment.user} size="small" />

      <Content>
        <div id="details">
          <div id="user">
            <Link to={`/users/${comment.user.username}`}>
              <h2>{comment.user.name}</h2>
            </Link>

            {commentedByOwner() && (
              <span id="owner">
                <b>·</b>
                {t("Post.Comment.Author")}
              </span>
            )}
          </div>

          <div id="date">
            <span>{getDate()}</span>
          </div>
        </div>

        <div id="message">
          <span>{comment.message}</span>
        </div>
      </Content>
    </Wrapper>
  );
}

export { Comment };
