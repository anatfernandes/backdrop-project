import { useQuery } from "@apollo/client";
import { useLocale, useToast } from "../../../../index";
import { UserQueryResult } from "./gql/types";
import { TypeParamType } from "./types";
import { USER, USER_FOR_UPDATE } from "./gql/users-query";

function useFindUser(id: string, type: TypeParamType = "page") {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error } = useQuery<UserQueryResult>(
    type === "page" ? USER : USER_FOR_UPDATE,
    {
      variables: { id },
      onError: () => {
        toast({ text: t("Profile.@Fetch.Error"), type: "error" });
      },
    },
  );

  return {
    user: data?.user,
    loading,
    error,
  };
}

export { useFindUser };
