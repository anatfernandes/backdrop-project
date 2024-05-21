import { Resolver, Query, Authorized, Arg, Ctx } from "type-graphql";
import { ContextType } from "../../../middlewares/authentication/types";
import * as service from "../../../services/post";
import { ListPostsInput, ListPostsResultType, Post } from "./types";

@Resolver()
class PostQueriesResolver {
  @Authorized()
  @Query(() => [Post])
  posts(
    @Arg("data") data: ListPostsInput,
    @Ctx() context: ContextType,
  ): ListPostsResultType {
    return service.listPosts({ ...data, user: context.user ?? "" });
  }
}

export { PostQueriesResolver };
