import { Resolver, FieldResolver, Root, Ctx } from "type-graphql";
import { ContextType } from "../../../middlewares/authentication/types";
import {
  FollowingLoader,
  PostsReactedByUserLoader,
  SavedPostsByUserLoader,
  TopicLoader,
  UserFollowersLoader,
  UserPostsLoader,
} from "../../../graphql-api/loaders";
import { Post, User, Topic } from "./types";

@Resolver(() => User)
class UserResolver {
  @FieldResolver(() => [Post])
  async posts(@Root() root: User): Promise<Post[]> {
    const posts = await UserPostsLoader(root.id);
    return posts ?? [];
  }

  @FieldResolver(() => [Post])
  async liked(@Root() root: User): Promise<Post[]> {
    const posts = await PostsReactedByUserLoader(root.id);
    return posts ?? [];
  }

  @FieldResolver(() => [Post])
  async saved(@Root() root: User, @Ctx() context: ContextType): Promise<Post[]> {
    if (root.id !== context.user) return [];

    const posts = await SavedPostsByUserLoader(root.id);
    return posts ?? [];
  }

  @FieldResolver(() => [Topic])
  async topics(@Root() root: User): Promise<Topic[]> {
    const userTopics = root.topics as unknown as Topic[];
    const topics = await TopicLoader(userTopics.map((topic) => topic.id));
    return topics ?? [];
  }

  @FieldResolver(() => [User])
  async following(@Root() root: User): Promise<User[]> {
    const following = await FollowingLoader(root.id);
    return following ?? [];
  }

  @FieldResolver(() => [User])
  async followed(@Root() root: User): Promise<User[]> {
    const followed = await UserFollowersLoader(root.id);
    return followed ?? [];
  }

  @FieldResolver(() => Boolean)
  async isFollowing(@Root() root: User, @Ctx() context: ContextType): Promise<boolean> {
    const followedByUserLogged = await FollowingLoader(context.user ?? "");
    const following = (followedByUserLogged ?? []).find((user) => user.id === root.id);
    return !!following;
  }
}

export { UserResolver };
