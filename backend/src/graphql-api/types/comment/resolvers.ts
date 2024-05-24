import { Resolver, FieldResolver, Root } from "type-graphql";
import { PostLoader, UserLoader } from "../../../graphql-api/loaders";
import { Comment, Post, User } from "./types";

@Resolver(() => Comment)
class CommentResolver {
  @FieldResolver(() => User)
  async user(@Root() root: Comment): Promise<User | null> {
    const user = root.user as unknown as User;
    const users = await UserLoader([user.id]);
    return users?.[0] ?? null;
  }

  @FieldResolver(() => Post)
  async post(@Root() root: Comment): Promise<Post> {
    const commentPost = root.post as unknown as Post;
    const post = await PostLoader(commentPost.id);
    return post ?? null;
  }
}

export { CommentResolver };
