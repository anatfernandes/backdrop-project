import { fql } from "fauna";
import { handleQuery } from "../../database";
import { Post } from "../../models";
import { CreatePostParamsType, QueryType } from "./types";

async function updatePostTopics(id: string, topics: string[]) {
  for (const topic of topics) {
    const updatePostTopicQuery = fql`Posts.where(.id == ${id})
      .toArray().map(post => post.update({ topics: post.topics.append(Topics.byId(${topic})) }));`;
    await handleQuery(updatePostTopicQuery);
  }
}

async function createPost(data: CreatePostParamsType) {
  const newPost = { ...data, topics: [] };
  const createPostQuery = fql`Posts.create(${newPost as unknown as QueryType})
    .update({ owner: Users.byId(${data.owner}) });`;
  const createdPost = (await handleQuery(createPostQuery)) as unknown as Post;

  return updatePostTopics(createdPost.id, data.topics);
}

export { createPost };
