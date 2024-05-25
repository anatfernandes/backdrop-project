import { NonEmptyArray } from "type-graphql";
import { HealthQueriesResolver } from "./types/health";
import { TopicQueriesResolver } from "./types/topic";
import { PostMutationsResolver, PostQueriesResolver, PostResolver } from "./types/post";
import { CommentQueriesResolver, CommentResolver } from "./types/comment";
import { UserQueriesResolver, UserResolver } from "./types/user";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvers: NonEmptyArray<any> = [
  HealthQueriesResolver,
  TopicQueriesResolver,
  PostResolver,
  PostQueriesResolver,
  PostMutationsResolver,
  CommentQueriesResolver,
  CommentResolver,
  UserQueriesResolver,
  UserResolver,
];

export { resolvers };
