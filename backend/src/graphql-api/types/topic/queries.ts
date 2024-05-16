import { Resolver, Query } from "type-graphql";
import * as service from "../../../services/topic";
import { ListTopicsResult, Topic } from "./types";

@Resolver()
class TopicQueriesResolver {
  @Query(() => [Topic])
  topics(): ListTopicsResult {
    return service.listTopics();
  }
}

export { TopicQueriesResolver };
