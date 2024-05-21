import * as repository from "../../repositories/comment/comment.repository";

function CommentByPostLoader(ids: string[]) {
  return repository.findCommentsByPost(ids);
}

export { CommentByPostLoader };
