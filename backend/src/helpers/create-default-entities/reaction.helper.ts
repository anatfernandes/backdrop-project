import { Reaction, ReactionType } from "../../models";

function createDefaultReaction(reaction: Partial<Reaction> = {}) {
  return {
    user: "",
    post: "",
    type: ReactionType.LIKE,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...reaction,
  };
}

export { createDefaultReaction };
