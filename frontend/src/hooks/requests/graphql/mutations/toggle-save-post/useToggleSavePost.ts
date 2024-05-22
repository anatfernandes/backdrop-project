import { useMutation } from "@apollo/client";
import { useUser } from "../../../../index";
import { HandleToggleSavePostParamsType, MutationCommomParamsType } from "./types";
import { SAVE_POST } from "./gql/toggle-save-post-query";

const defaultCallback = () => null;

function useToggleSavePost({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const { user } = useUser();
  const [save] = useMutation(SAVE_POST);

  function handleToggleSavePost({ value, post }: HandleToggleSavePostParamsType) {
    return save({
      variables: {
        data: {
          user: user.id,
          post,
          value,
        },
      },
      onError: () => {
        onError();
      },
      onCompleted() {
        onSuccess();
      },
    });
  }

  return { handleToggleSavePost };
}

export { useToggleSavePost };
