import { Field, ID, ObjectType } from "type-graphql";
import { Post, User } from "../index";

@ObjectType()
class Saved {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: string;

  @Field(() => Post)
  post: string;

  @Field()
  createdAt: Date;
}

export { Saved };
