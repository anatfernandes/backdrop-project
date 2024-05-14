import { registerEnumType } from "type-graphql";

enum ReactionType {
  LIKE = "LIKE",
}

registerEnumType(ReactionType, {
  name: "ReactionType",
});

export { ReactionType };
