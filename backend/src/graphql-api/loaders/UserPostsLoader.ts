import * as repository from "../../repositories/post/post.repository";

function UserPostsLoader(id: string) {
  return repository.findUserPosts(id);
}

export { UserPostsLoader };
