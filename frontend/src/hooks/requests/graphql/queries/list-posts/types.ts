type ListPostsParamsType = {
  page?: number;
  limit?: number;
};

type HandleChangeSortPostsParamsType = {
  by: "date" | "like";
  direction: "asc" | "desc";
};

export type { ListPostsParamsType, HandleChangeSortPostsParamsType };
