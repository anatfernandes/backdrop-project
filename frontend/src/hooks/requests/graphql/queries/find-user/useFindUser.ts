import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { UserQueryResult } from "./gql/types";
import { USER } from "./gql/users-query";

function useFindUser(id: string) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error } = useQuery<UserQueryResult>(USER, {
    variables: { id },
    onError: () => {
      toast({ text: t("Profile.@Fetch.Error"), type: "error" });
    },
  });

  return {
    user: data?.user,
    loading,
    error,
  };
}

export { useFindUser };
