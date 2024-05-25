import { Post } from "../../models";
import * as savedRepository from "../../repositories/saved/saved.repository";
import * as postRepository from "../../repositories/post/post.repository";

async function SavedPostsByUserLoader(user: string) {
  const saved = await savedRepository.findAllSavedByUser(user);

  if (!saved?.length) return [];

  const posts = saved.map((saved) => saved.post) as unknown as Post[];
  const ids = posts.map((post) => post.id);

  return postRepository.findPostsById(ids);
}

export { SavedPostsByUserLoader };
