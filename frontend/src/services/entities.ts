type FullUserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  about: string;
  avatar: string;
  background: string;
  topics: [TopicType];
  type: UserTypesType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

type UserType = Omit<FullUserType, "password">;

type TopicType = {
  id: string;
  name: TopicName;
  createdAt: string;
};

type PostType = {
  id: string;
  content: string;
  topics: [TopicType];
  links: [string];
  locale: string;
  owner: UserType;
  reactions: number;
  comments: number;
  saved: boolean;
  liked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

enum UserTypesType {
  ADMIN = "ADMIN",
  USER = "USER",
}

enum TopicName {
  ABORTION = "ABORTION",
  AIR_POLLUTION = "AIR_POLLUTION",
  ANIMAL_RIGHTS = "ANIMAL_RIGHTS",
  CIVIL_RIGHTS = "CIVIL_RIGHTS",
  CLIMATE_CHANGE = "CLIMATE_CHANGE",
  CRIME = "CRIME",
  DISCRIMINATION = "DISCRIMINATION",
  ECONOMIC_INEQUALITY = "ECONOMIC_INEQUALITY",
  EDUCATION = "EDUCATION",
  ENVIRONMENTAL_POLITICS = "ENVIRONMENTAL_POLITICS",
  EQUALITY = "EQUALITY",
  HEALTHCARE = "HEALTHCARE",
  HOMELESSNESS = "HOMELESSNESS",
  IMMIGRATION = "IMMIGRATION",
  MENTAL_HEALTH = "MENTAL_HEALTH",
  OBESITY = "OBESITY",
  OVERPOPULATION = "OVERPOPULATION",
  POVERTY = "POVERTY",
  RACISM = "RACISM",
  REFUGEE_CRISIS = "REFUGEE_CRISIS",
  RIGHTS = "RIGHTS",
  UNEMPLOYMENT = "UNEMPLOYMENT",
  WOMEN_EMPOWERMENT = "WOMEN_EMPOWERMENT",
}

export type { FullUserType, UserType, UserTypesType, TopicType, TopicName, PostType };
