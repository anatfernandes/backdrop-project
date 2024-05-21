import { Topic } from "../../models";

type ListTopicsById = string[];

type ListTopicsResultType = { data: Topic[] | null };

export type { ListTopicsById, ListTopicsResultType };
