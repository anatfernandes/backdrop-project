import { Field, ID, ObjectType } from "type-graphql";
import { NotificationType, Post, User } from "../index";

@ObjectType()
class Notification {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  from: string;

  @Field(() => User)
  to: string;

  @Field(() => Post)
  post: string;

  @Field(() => String)
  action: string;

  @Field(() => [ID], { nullable: "items", defaultValue: [] })
  actors: string[];

  @Field(() => NotificationType)
  type: NotificationType;

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export { Notification };
