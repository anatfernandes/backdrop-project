import { Topic } from "../../../models";

type ListTopicsResult = Promise<Topic[] | null>;

export { Topic };
export type { ListTopicsResult };
