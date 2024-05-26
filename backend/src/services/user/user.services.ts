import { omit, pick } from "lodash";
import * as repository from "../../repositories/sign/sign.repository";
import { createDefaultUser } from "../../helpers/create-default-entities";
import { EditUserData, EditUserParamsType } from "./types";

function findUser(id: string) {
  return repository.findUserById(id);
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

export { findUser, updateUser };
