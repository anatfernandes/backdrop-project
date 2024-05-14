import bcrypt from "bcrypt";
import { conflictError } from "../../helpers/errors.helper";
import { createDefaultUser } from "../../helpers/create-default-entities";
import * as repository from "../../repositories/sign/sign.repository";
import { PostSignUpParamsType } from "./types";

async function postSignUp(data: PostSignUpParamsType) {
  const haveUserWithEmail = await repository.findUserByEmail(data.email);
  if (haveUserWithEmail) throw conflictError("There is already a user with this email!");

  const haveUserWithUsername = await repository.findUserByUsername(data.username);
  if (haveUserWithUsername) throw conflictError("There is already a user with this username!");

  const password = await bcrypt.hash(data.password, 13);

  const newUser = createDefaultUser({ ...data, password });

  return repository.createUser(newUser);
}

export { postSignUp };
