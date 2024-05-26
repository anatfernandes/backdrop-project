import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pick } from "lodash";
import { conflictError, notFoundError } from "../../helpers/errors.helper";
import {
  createDefaultSession,
  createDefaultUser,
} from "../../helpers/create-default-entities";
import * as repository from "../../repositories/sign/sign.repository";
import { FullUser, PostSignInParamsType, PostSignUpParamsType } from "./types";

async function postSignUp(data: PostSignUpParamsType) {
  const haveUserWithEmail = await repository.findUserByEmail(data.email);
  if (haveUserWithEmail) throw conflictError("There is already a user with this email!");

  const haveUserWithUsername = await repository.findUserByUsername(data.username);
  if (haveUserWithUsername) {
    throw conflictError("There is already a user with this username!");
  }

  const password = await bcrypt.hash(data.password, 13);

  const newUser = createDefaultUser({ ...data, password });

  return repository.createUser(newUser);
}

async function postSignIn(data: PostSignInParamsType) {
  const user = (await repository.findUserByEmail(data.email)) as unknown as FullUser;

  if (!user || !bcrypt.compareSync(data.password, user.password)) {
    throw notFoundError("Invalid Email/Password!");
  }

  const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET ?? "JWT_SECRET");

  const newSession = createDefaultSession({ user: user.id, token });

  await repository.createSession(newSession);

  return {
    token,
    ...pick(user, ["id", "name", "username", "avatar", "topics", "type"]),
  };
}

async function postSignOut(session: string) {
  return repository.finishSession(session);
}

export { postSignUp, postSignIn, postSignOut };
