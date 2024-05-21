import * as repository from "../../repositories/reaction/reaction.repository";

function ReactionByPostLoader(ids: string[]) {
  return repository.findReactionsByPost(ids);
}

export { ReactionByPostLoader };
