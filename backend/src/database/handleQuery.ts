import { Query } from "fauna";
import { client } from "./connection";

async function handleQuery(query: Query, { returnRaw = false } = {}) {
  const result = await client.query(query);
  if (returnRaw) return result;
  return result?.data;
}

export { handleQuery };
