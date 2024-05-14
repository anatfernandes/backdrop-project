import { Field, ID, ObjectType } from "type-graphql";
import { Length } from "class-validator";
import { Post, User } from "../index";

@ObjectType()
class Comment {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: string;

  @Field(() => Post)
  post: string;

  @Field()
  @Length(1, 255)
  message: string;

  @Field()
  createdAt: Date;
}

export { Comment };
