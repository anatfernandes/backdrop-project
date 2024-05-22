import { Post } from "../../models";

function createDefaultPost(post: Partial<Post> = {}) {
  return {
    owner: "",
    content: "",
    locale: "",
    topics: [],
    links: [],
    active: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...post,
  };
}

export { createDefaultPost };
