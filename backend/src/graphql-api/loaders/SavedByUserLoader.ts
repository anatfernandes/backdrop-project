import * as repository from "../../repositories/saved/saved.repository";

function SavedByUserLoader(user: string, posts: string[]) {
  return repository.findSavedByUser(user, posts);
}

export { SavedByUserLoader };
