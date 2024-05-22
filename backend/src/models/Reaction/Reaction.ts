import { Field, ID, ObjectType } from "type-graphql";
import { Post, ReactionType, User } from "../index";

@ObjectType()
class Reaction {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: string;

  @Field(() => Post)
  post: string;

  @Field(() => ReactionType)
  type: ReactionType;

  @Field()
  createdAt: number;

  @Field()
  updatedAt: number;
}

export { Reaction };
