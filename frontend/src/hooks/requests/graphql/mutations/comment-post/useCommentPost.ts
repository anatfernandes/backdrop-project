import { useMutation } from "@apollo/client";
import { HandleCommentPostParamsType, MutationCommomParamsType } from "./types";
import { COMMENTS } from "../../queries/list-comments/gql/list-comments-query";
import { COMMENT_POST } from "./gql/comment-post-query";

const defaultCallback = () => null;

function useCommentPost({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const [save, { loading }] = useMutation(COMMENT_POST);

  function handleCommentPost(data: HandleCommentPostParamsType) {
    return save({
      variables: { data },
      refetchQueries: [COMMENTS],
      onError: () => {
        onError();
      },
      onCompleted() {
        onSuccess();
      },
    });
  }

  return { handleCommentPost, loading };
}

export { useCommentPost };
