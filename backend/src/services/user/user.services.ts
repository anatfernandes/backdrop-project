import { omit, pick } from "lodash";
import * as repository from "../../repositories/sign/sign.repository";
import {
  createDefaultUser,
  createDefaultFollow,
} from "../../helpers/create-default-entities";
import { EditUserData, EditUserParamsType, ToggleFollowUserParamsType } from "./types";

function findUser(id: string) {
  return repository.findUserById(id);
}

async function findUsersByName(name: string) {
  const users = await repository.findUsersByNameOrUsername(name);
  return users ?? [];
}

async function updateUser(data: EditUserParamsType) {
  const user = await repository.findUserById(data.user);

  if (!user) throw new Error("User not found!");

  const updatedUser = pick(createDefaultUser({ ...omit(user, "updatedAt"), ...data }), [
    "name",
    "avatar",
    "background",
    "about",
    "topics",
    "updatedAt",
  ]) as EditUserData;

  await repository.updateUser(data.user, updatedUser);
}

async function toggleFollowUser(data: ToggleFollowUserParamsType) {
  const { value, ...follow } = data;
  const newFollow = createDefaultFollow(follow);

  if (value) return repository.followUser(newFollow);

  return repository.deleteFollowUser(newFollow);
}

export { findUser, findUsersByName, updateUser, toggleFollowUser };
