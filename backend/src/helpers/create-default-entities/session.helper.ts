import { Session } from "../../models";

function createDefaultSession(session: Partial<Session> = {}) {
  return {
    user: "",
    token: "",
    active: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...session,
  };
}

export { createDefaultSession };
