import { useMutation } from "@apollo/client";
import { useUser } from "../../../../index";
import { HandleLikePostParamsType, MutationCommomParamsType } from "./types";
import { LIKE_POST } from "./gql/like-post-query";

const defaultCallback = () => null;

function useLikePost({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const { user } = useUser();
  const [save] = useMutation(LIKE_POST);

  function handleLikePost({ value, post }: HandleLikePostParamsType) {
    return save({
      variables: {
        data: {
          type: "LIKE",
          user: user.id,
          post,
          value,
        },
      },
      onError: () => {
        onError(value);
      },
      onCompleted() {
        onSuccess();
      },
    });
  }

  return { handleLikePost };
}

export { useLikePost };
