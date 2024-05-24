import * as repository from "../../repositories/post/post.repository";

function PostLoader(id: string) {
  return repository.findPostById(id);
}

export { PostLoader };
