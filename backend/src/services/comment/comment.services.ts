import * as repository from "../../repositories/comment/comment.repository";
import { ListsCommentsParamsType } from "./types";

async function listComments(data: ListsCommentsParamsType) {
  return repository.findCommentsByPost([data.post]);
}

export { listComments };
