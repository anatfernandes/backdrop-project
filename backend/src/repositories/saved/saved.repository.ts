import { fql } from "fauna";
import { handleQuery } from "../../database";
import { ListSavedByUserParamsType, ListSavedByUserResultType } from "./types";

async function findSavedByUser(user: string, posts: ListSavedByUserParamsType = []) {
  const query = fql`Saved.where(saved => saved.user.id == ${user}
    && (${posts}.length == 0 || ${posts}.includes(saved.post.id)));`;
  const result = (await handleQuery(query)) as ListSavedByUserResultType;
  return result?.data;
}

async function findAllSavedByUser(user: string) {
  const query = fql`Saved.where(.user.id == ${user});`;
  const result = (await handleQuery(query)) as ListSavedByUserResultType;
  return result?.data;
}

export { findSavedByUser, findAllSavedByUser };
