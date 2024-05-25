import { Post } from "../../models";
import * as postRepository from "../../repositories/post/post.repository";
import { ReactionByUserLoader } from "./index";

async function PostsReactedByUserLoader(user: string) {
  const reactions = await ReactionByUserLoader(user, []);

  if (!reactions?.length) return [];

  const posts = reactions.map((reaction) => reaction.post) as unknown as Post[];
  const ids = posts.map((post) => post.id);

  return postRepository.findPostsById(ids);
}

export { PostsReactedByUserLoader };
