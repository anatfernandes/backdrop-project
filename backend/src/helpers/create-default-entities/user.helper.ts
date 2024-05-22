import { FullUser, UserType } from "../../models";

function createDefaultUser(user: Partial<FullUser> = {}) {
  return {
    name: "",
    username: "",
    email: "",
    avatar: "",
    background: "",
    about: "",
    password: "",
    topics: [],
    active: true,
    type: UserType.USER,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...user,
  };
}

export { createDefaultUser };
