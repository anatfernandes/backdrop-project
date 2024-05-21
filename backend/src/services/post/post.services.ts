import { uniqBy } from "lodash";
import { createDefaultPost } from "../../helpers/create-default-entities";
import * as repository from "../../repositories/post/post.repository";
import * as signRepository from "../../repositories/sign/sign.repository";
import { CreatePostParamsType, ListsPostsParamsType } from "./types";

async function listPosts(data: ListsPostsParamsType) {
  const { page, user, ...params } = data;
  const offset = (page - 1) * data.limit;
  const newData = { ...params, offset };

  if (data.context !== "home") return repository.listPosts(newData);

  const following = await signRepository.findFollowing(user);
  const users = (following ?? []).map((user) => user.id);

  users.push(user);

  const loggedUser = await signRepository.findUserById(user);
  const topics = (loggedUser?.topics ?? []).map((topic) => topic.id ?? "");

  newData.where.users = users;

  const posts = await repository.listPosts(newData);
  const postsByTopics = await repository.listPosts({
    ...newData,
    where: { locale: "", users: [], topics },
  });

  return uniqBy((posts ?? []).concat(postsByTopics ?? []), "id");
}

async function createPost(data: CreatePostParamsType) {
  const newPost = createDefaultPost(data);
  await repository.createPost(newPost);
}

export { listPosts, createPost };
