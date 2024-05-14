import { registerEnumType } from "type-graphql";

enum UserType {
  USER = "USER",
  ADMIN = "ADMIN",
}

registerEnumType(UserType, {
  name: "UserType",
});

export { UserType };
