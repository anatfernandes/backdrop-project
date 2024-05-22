import { fql } from "fauna";
import { handleQuery } from "../../database";
import { Post } from "../../models";
import { getListPostsQuery } from "./helpers";
import {
  CreatePostParamsType,
  DeletePostReactionParamsType,
  DeleteSavedPostParamsType,
  ListPostsResultType,
  ListsPostsParamsType,
  QueryType,
  ReactPostParamsType,
  SavePostParamsType,
} from "./types";

async function updatePostTopics(id: string, topics: string[]) {
  for (const topic of topics) {
    const updatePostTopicQuery = fql`Posts.where(.id == ${id})
      .toArray().map(post => post.update({ topics: post.topics.append(Topics.byId(${topic})) }));`;
    await handleQuery(updatePostTopicQuery);
  }
}

async function listPosts(data: ListsPostsParamsType) {
  const query = getListPostsQuery(data);

  const result = (await handleQuery(query)) as ListPostsResultType;

  return result?.data;
}

async function createPost(data: CreatePostParamsType) {
  const newPost = { ...data, topics: [] };
  const createPostQuery = fql`Posts.create(${newPost as unknown as QueryType})
    .update({ owner: Users.byId(${data.owner}) });`;
  const createdPost = (await handleQuery(createPostQuery)) as unknown as Post;

  return updatePostTopics(createdPost.id, data.topics);
}

async function reactPost(data: ReactPostParamsType) {
  const likePostQuery = fql`Reactions.create(${data})
    .update({ user: Users.byId(${data.user}), post: Posts.byId(${data.post}) });`;
  return handleQuery(likePostQuery);
}

async function savePost(data: SavePostParamsType) {
  const savePostQuery = fql`Saved.create(${data})
    .update({ user: Users.byId(${data.user}), post: Posts.byId(${data.post}) });`;
  return handleQuery(savePostQuery);
}

async function deletePostReaction(data: DeletePostReactionParamsType) {
  const likePostQuery = fql`Reactions.where(
      .user.id == ${data.user}
      && .post.id == ${data.post}
      && .type == ${data.type}
    ).forEach(reaction => reaction.delete());`;

  return handleQuery(likePostQuery);
}

async function deleteSavedPost(data: DeleteSavedPostParamsType) {
  const deleteSavedPostQuery = fql`Saved.where(
      .user.id == ${data.user}
      && .post.id == ${data.post}
    ).forEach(saved => saved.delete());`;

  return handleQuery(deleteSavedPostQuery);
}

export {
  listPosts,
  createPost,
  reactPost,
  savePost,
  deletePostReaction,
  deleteSavedPost,
};
