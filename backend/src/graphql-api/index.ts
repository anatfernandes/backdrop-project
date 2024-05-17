import { NonEmptyArray } from "type-graphql";
import { HealthQueriesResolver } from "./types/health";
import { TopicQueriesResolver } from "./types/topic";
import { PostMutationsResolver } from "./types/post";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvers: NonEmptyArray<any> = [
  HealthQueriesResolver,
  TopicQueriesResolver,
  PostMutationsResolver,
];

export { resolvers };
