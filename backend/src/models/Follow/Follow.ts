import { Field, ID, ObjectType } from "type-graphql";
import { User } from "../index";

@ObjectType()
class Follow {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  followed: string;

  @Field(() => User)
  follower: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export { Follow };
