import { useMutation } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useLocale, useToast } from "../../../../index";
import { HandleFollowUserParamsType, MutationCommomParamsType } from "./types";
import { USER } from "../../queries/find-user/gql/users-query";
import { FOLLOW_USER } from "./gql/follow-user-query";

const defaultCallback = () => null;

function useFollowUser({
  onSuccess = defaultCallback,
  onError = defaultCallback,
}: MutationCommomParamsType = {}) {
  const { t } = useLocale();
  const toast = useToast();
  const [save, { loading }] = useMutation(FOLLOW_USER);

  function handleFollowUser(data: HandleFollowUserParamsType) {
    return save({
      variables: { data },
      refetchQueries: [USER],
      onError: (error) => {
        const action = data.value ? "Follow" : "Unfollow";
        const text = getGraphqlError(error);
        const title = t(`User.${action}.@Submit.Error`);

        toast({ text, title, type: "error" });

        onError(!data.value);
      },
      onCompleted() {
        onSuccess();
      },
    });
  }

  return { loading, handleFollowUser };
}

export { useFollowUser };
