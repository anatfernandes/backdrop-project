import { fql } from "fauna";
import { handleQuery } from "../../database";
import { ListTopicsResultType } from "./types";

async function listTopics() {
  const query = fql`Topics.byNameAsc();`;
  const result = (await handleQuery(query)) as ListTopicsResultType;
  return result?.data;
}

export { listTopics };
