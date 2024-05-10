import { NonEmptyArray } from "type-graphql";
import { HealthQueriesResolver } from "./types/health";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvers: NonEmptyArray<any> = [HealthQueriesResolver];

export { resolvers };
