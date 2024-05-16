import * as repository from "../../repositories/topic/topic.repository";

function listTopics() {
  return repository.listTopics();
}

export { listTopics };
