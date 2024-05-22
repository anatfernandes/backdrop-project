import { Saved } from "../../models";

function createDefaultSaved(saved: Partial<Saved> = {}) {
  return {
    user: "",
    post: "",
    createdAt: Date.now(),
    ...saved,
  };
}

export { createDefaultSaved };
