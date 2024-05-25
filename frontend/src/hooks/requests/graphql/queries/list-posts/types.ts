type ListPostsParamsType = {
  page?: number;
  limit?: number;
};

type HandleChangeSortPostsParamsType = {
  by: "date" | "like";
  direction: "asc" | "desc";
};

type HandleChangeFilterPostsParamsType = {
  locale: string;
  users: string[];
  topics: string[];
};

export type {
  ListPostsParamsType,
  HandleChangeSortPostsParamsType,
  HandleChangeFilterPostsParamsType,
};
