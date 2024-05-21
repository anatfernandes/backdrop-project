import { fql } from "fauna";
import { handleQuery } from "../../database";
import { ListTopicsById, ListTopicsResultType } from "./types";

async function listTopics() {
  const query = fql`Topics.byNameAsc().pageSize(100);`;
  const result = (await handleQuery(query)) as ListTopicsResultType;
  return result?.data;
}

async function findTopicsById(topics: ListTopicsById) {
  const query = fql`Topics.where(topic => ${topics}.includes(topic.id));`;
  const result = (await handleQuery(query)) as ListTopicsResultType;
  return result?.data;
}

export { listTopics, findTopicsById };
