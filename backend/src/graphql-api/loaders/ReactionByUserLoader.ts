import * as repository from "../../repositories/reaction/reaction.repository";

function ReactionByUserLoader(user: string, posts: string[]) {
  return repository.findReactionsByUser(user, posts);
}

export { ReactionByUserLoader };
