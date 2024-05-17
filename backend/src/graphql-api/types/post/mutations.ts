import { Resolver, Mutation, Arg, Authorized } from "type-graphql";
import * as service from "../../../services/post";
import { CreatePostInput } from "./types";

@Resolver()
class PostMutationsResolver {
  @Authorized()
  @Mutation(() => Boolean)
  async createPost(@Arg("data") data: CreatePostInput): Promise<boolean> {
    await service.createPost(data);
    return true;
  }
}

export { PostMutationsResolver };
