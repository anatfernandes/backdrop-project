/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useListComments } from "../../../../../hooks/requests/graphql/queries";
import { useLocale } from "../../../../../hooks";
import { Loading } from "../../../../shared";
import { CreateComment } from "../create-comment";
import { Comment } from "../comment";
import { Wrapper } from "./styles";
import { CommentsParamsType } from "./types";

function Comments({
  post,
  handleUpdateComments,
  ...other
}: Readonly<CommentsParamsType>) {
  const { t } = useLocale();
  const { comments, loading } = useListComments({ post });

  useEffect(() => {
    handleUpdateComments(comments.length);
  }, [comments.length]);

  return (
    <Wrapper {...other}>
      <CreateComment post={post} />

      {loading && <Loading size="small" />}

      {!loading && !comments.length && (
        <span id="no-data">{t("Post.Comment.List.NoData")}</span>
      )}

      {comments.map((comment, index) => (
        <Comment key={`${comment.message}-${index}`} comment={comment} />
      ))}
    </Wrapper>
  );
}

export { Comments };
