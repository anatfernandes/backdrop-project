import { fql } from "fauna";
import { handleQuery } from "../../database";
import { ListCommentsByPostParamsType, ListCommentsByPostResultType } from "./types";

async function findCommentsByPost(posts: ListCommentsByPostParamsType) {
  const query = fql`Comments.where(comment => ${posts}.includes(comment.post.id));`;
  const result = (await handleQuery(query)) as ListCommentsByPostResultType;
  return result?.data;
}

export {  findCommentsByPost };
