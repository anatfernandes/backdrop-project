import { useQuery } from "@apollo/client";
import { getGraphqlError } from "../../../../utils";
import { useLocale, useToast } from "../../../../index";
import { UsersByNameQueryResult } from "./gql/types";
import { USERS_BY_NAME } from "./gql/list-users-by-name-query";

function useListUsersByName(name: string) {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error, refetch } = useQuery<UsersByNameQueryResult>(
    USERS_BY_NAME,
    {
      fetchPolicy: "network-only",
      variables: { name },
      onError: (error) => {
        const title = t("Search.@Fetch.Error");
        const text = getGraphqlError(error);
        toast({ text, title, type: "error" });
      },
    },
  );

  function handleRefetchUsers(name: string) {
    refetch({ name });
  }

  return {
    users: data?.usersByName ?? [],
    loading,
    error,
    handleRefetchUsers,
  };
}

export { useListUsersByName };
