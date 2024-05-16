import { Session } from "../../models";

function createDefaultSession(session: Partial<Session> = {}) {
  return {
    user: "",
    token: "",
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...session,
  };
}

export { createDefaultSession };
