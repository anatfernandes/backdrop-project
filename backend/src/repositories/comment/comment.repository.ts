import { fql } from "fauna";
import { handleQuery } from "../../database";
import {
  CreateCommentParamsType,
  ListCommentsByPostParamsType,
  ListCommentsByPostResultType,
} from "./types";

async function findCommentsByPost(posts: ListCommentsByPostParamsType) {
  const query = fql`Comments.sortByDateDesc().where(comment => ${posts}.includes(comment.post.id));`;
  const result = (await handleQuery(query)) as ListCommentsByPostResultType;
  return result?.data;
}

async function createComment(data: CreateCommentParamsType) {
  const query = fql`Comments.create(${data})
    .update({ user: Users(${data.user}), post: Posts(${data.post}) });`;
  return handleQuery(query);
}

export { findCommentsByPost, createComment };
