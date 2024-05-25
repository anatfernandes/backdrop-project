import { fql } from "fauna";
import { handleQuery } from "../../database";
import { Post } from "../../models";
import { getListPostsQuery } from "./helpers";
import {
  CreatePostParamsType,
  DeletePostReactionParamsType,
  DeleteSavedPostParamsType,
  FindUserPostParamsType,
  FindUserPostResultType,
  ListPostsResultType,
  ListsPostsParamsType,
  QueryType,
  ReactPostParamsType,
  SavePostParamsType,
  UpdatePostParamsType,
} from "./types";

async function updatePostTopics(id: string, topics: string[]) {
  for (const topic of topics) {
    const updatePostTopicQuery = fql`Posts.where(.id == ${id})
      .toArray().map(post => post.update({ topics: post.topics.append(Topics.byId(${topic})) }));`;
    await handleQuery(updatePostTopicQuery);
  }
}

async function findUserPost(data: FindUserPostParamsType) {
  const query = fql`Posts.where(.id == ${data.post} && .owner.id == ${data.user});`;
  const result = (await handleQuery(query)) as FindUserPostResultType;
  return result?.data?.[0];
}

async function findUserPosts(user: string) {
  const query = fql`Posts.where(.owner.id == ${user} && .active == true);`;
  const result = (await handleQuery(query)) as FindUserPostResultType;
  return result?.data;
}

async function findPostById(id: string) {
  const query = fql`Posts.byId(${id});`;
  return handleQuery(query) as unknown as Post;
}

async function findPostsById(ids: string[]) {
  const query = fql`Posts.where(post => post.active == true && ${ids}.includes(post.id));`;
  const result = (await handleQuery(query)) as FindUserPostResultType;
  return result?.data;
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

async function updatePost(id: string, data: UpdatePostParamsType) {
  const query = fql`Posts.byId(${id})!
    .update(${data})
    .update({
      topics: ${data.topics}.map(topic => Topics(topic)),
    });`;

  return handleQuery(query);
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

async function deletePost(post: string) {
  const query = fql`Posts.byId(${post})!.delete()`;
  return handleQuery(query);
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
  findPostById,
  findPostsById,
  findUserPost,
  findUserPosts,
  listPosts,
  createPost,
  updatePost,
  reactPost,
  savePost,
  deletePost,
  deletePostReaction,
  deleteSavedPost,
};
