import { useQuery } from "@apollo/client";
import { translateTopic } from "../../../../../utils";
import { useLocale, useToast } from "../../../../index";
import { TopicsQueryResult } from "./gql/types";
import { TOPICS } from "./gql/topics-query";

function useListTopics() {
  const toast = useToast();
  const { t } = useLocale();
  const { data, loading, error } = useQuery<TopicsQueryResult>(TOPICS);

  if (error) {
    toast({ text: t("Topic.List.Error"), type: "error" });
  }

  function getSortedTopics() {
    return (data?.topics ?? [])
      .map((topic) => ({
        ...topic,
        name: t(translateTopic(topic.name)),
      }))
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
  }

  return {
    topics: getSortedTopics(),
    loading,
    error,
  };
}

export { useListTopics };
