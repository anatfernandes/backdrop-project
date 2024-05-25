import * as repository from "../../repositories/sign/sign.repository";

function findUser(id: string) {
  return repository.findUserById(id);
}

export { findUser };
