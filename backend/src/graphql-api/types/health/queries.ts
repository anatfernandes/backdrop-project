import { Resolver, Query } from "type-graphql";

@Resolver()
class HealthQueriesResolver {
  @Query(() => String)
  health() {
    return "GraphQL it's alive!!!";
  }
}

export { HealthQueriesResolver };
