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
    createdAt: new Date(),
    updatedAt: new Date(),
    ...user,
  };
}

export { createDefaultUser };
