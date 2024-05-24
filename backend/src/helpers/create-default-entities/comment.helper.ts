import { Comment } from "../../models";

function createDefaultComment(comment: Partial<Comment> = {}) {
  return {
    user: "",
    post: "",
    message: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...comment,
  };
}

export { createDefaultComment };
