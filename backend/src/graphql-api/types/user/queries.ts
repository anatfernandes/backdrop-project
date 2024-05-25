import { Resolver, Query, Arg, Authorized } from "type-graphql";
import * as service from "../../../services/user";
import { User } from "./types";

@Resolver()
class UserQueriesResolver {
  @Authorized()
  @Query(() => User)
  user(@Arg("id") id: string): Promise<User> {
    return service.findUser(id);
  }
}

export { UserQueriesResolver };
