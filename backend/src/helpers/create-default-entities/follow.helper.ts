import { Follow } from "../../models";

function createDefaultFollow(follow: Partial<Follow> = {}) {
  return {
    follower: "",
    followed: "",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...follow,
  };
}

export { createDefaultFollow };
