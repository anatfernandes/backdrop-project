import { Resolver, FieldResolver, Root, Ctx } from "type-graphql";
import { ContextType } from "../../../middlewares/authentication/types";
import {
  CommentByPostLoader,
  ReactionByPostLoader,
  SavedByUserLoader,
  TopicLoader,
  UserLoader,
} from "../../../graphql-api/loaders";
import { Post, User, Topic } from "./types";

@Resolver(() => Post)
class PostResolver {
  @FieldResolver(() => User)
  async owner(@Root() root: Post): Promise<User | null> {
    const owner = root.owner as unknown as User;
    const user = await UserLoader([owner.id]);
    return user?.[0] ?? null;
  }

  @FieldResolver(() => [Topic])
  async topics(@Root() root: Post): Promise<Topic[]> {
    const postTopics = root.topics as unknown as Topic[];
    const topics = await TopicLoader(postTopics.map((topic) => topic.id));
    return topics ?? [];
  }

  @FieldResolver(() => Number)
  async reactions(@Root() root: Post): Promise<number> {
    const reactions = await ReactionByPostLoader([root.id]);
    return reactions?.length ?? 0;
  }

  @FieldResolver(() => Number)
  async comments(@Root() root: Post): Promise<number> {
    const comments = await CommentByPostLoader([root.id]);
    return comments?.length ?? 0;
  }

  @FieldResolver(() => Boolean)
  async saved(@Root() root: Post, @Ctx() context: ContextType): Promise<boolean> {
    const saved = await SavedByUserLoader(context.user ?? "", [root.id]);
    return !!saved?.length;
  }
}

export { PostResolver };
