import { useListComments } from "../../../../../hooks/requests/graphql/queries";
import { useLocale } from "../../../../../hooks";
import { Loading } from "../../../../shared";
import { CreateComment } from "../create-comment";
import { Comment } from "../comment";
import { Wrapper } from "./styles";
import { CommentsParamsType } from "./types";

function Comments({ post, ...other }: Readonly<CommentsParamsType>) {
  const { t } = useLocale();
  const { comments, loading } = useListComments({ post });

  return (
    <Wrapper {...other}>
      {loading && <Loading size="small" />}

      {!loading && <CreateComment post={post} />}

      {!loading && !comments.length && (
        <span id="no-data">{t("Post.Comment.List.NoData")}</span>
      )}

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
}

export { Comments };
