import { Resolver, Mutation, Arg, Authorized } from "type-graphql";
import * as service from "../../../services/post";
import { CreatePostInput, ReactPostInput, SavePostInput } from "./types";

@Resolver()
class PostMutationsResolver {
  @Authorized()
  @Mutation(() => Boolean)
  async createPost(@Arg("data") data: CreatePostInput): Promise<boolean> {
    await service.createPost(data);
    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async reactPost(@Arg("data") data: ReactPostInput): Promise<boolean> {
    await service.togglePostReaction(data);
    return true;
  }

  @Authorized()
  @Mutation(() => Boolean)
  async savePost(@Arg("data") data: SavePostInput): Promise<boolean> {
    await service.toggleSavePost(data);
    return true;
  }
}

export { PostMutationsResolver };
