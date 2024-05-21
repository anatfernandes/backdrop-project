import * as repository from "../../repositories/topic/topic.repository";

function TopicLoader(ids: string[]) {
  return repository.findTopicsById(ids);
}

export { TopicLoader };
