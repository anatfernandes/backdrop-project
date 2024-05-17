import { Post } from "../../models";

function createDefaultPost(post: Partial<Post> = {}) {
  return {
    owner: "",
    content: "",
    locale: "",
    topics: [],
    links: [],
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...post,
  };
}

export { createDefaultPost };
