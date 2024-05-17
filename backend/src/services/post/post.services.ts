import { createDefaultPost } from "../../helpers/create-default-entities";
import * as repository from "../../repositories/post/post.repository";
import { CreatePostParamsType } from "./types";

async function createPost(data: CreatePostParamsType) {
  const newPost = createDefaultPost(data);
  await repository.createPost(newPost);
}

export { createPost };
