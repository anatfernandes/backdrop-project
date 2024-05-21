import { fql } from "fauna";
import { handleQuery } from "../../database";
import { ListReactionsByPostParamsType, ListReactionsByPostResultType } from "./types";

async function findReactionsByPost(posts: ListReactionsByPostParamsType) {
  const query = fql`Reactions.where(reaction => ${posts}.includes(reaction.post.id));`;
  const result = (await handleQuery(query)) as ListReactionsByPostResultType;
  return result?.data;
}

export {  findReactionsByPost };
