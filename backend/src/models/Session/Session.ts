import { Field, ID, ObjectType } from "type-graphql";
import { User } from "../index";

@ObjectType()
class Session {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: string;

  @Field(() => String)
  token: string;

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  createdAt: number;

  @Field()
  updatedAt: number;
}

export { Session };
