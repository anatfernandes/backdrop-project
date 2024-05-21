import * as repository from "../../repositories/sign/sign.repository";

function UserLoader(ids: string[]) {
  return repository.findUsersById(ids);
}

export { UserLoader };
