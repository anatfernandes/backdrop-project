import { Field, ID, ObjectType } from "type-graphql";
import { ArrayMaxSize, Length, MaxLength } from "class-validator";
import { Topic, User } from "../index";

@ObjectType()
class Post {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  owner: string;

  @Field()
  @Length(1, 2400)
  content: string;

  @Field({ defaultValue: "" })
  @MaxLength(30)
  locale: string;

  @Field(() => [Topic])
  @ArrayMaxSize(3)
  topics: string[];

  @Field(() => [String], { nullable: "items", defaultValue: [] })
  @ArrayMaxSize(3)
  links: string[];

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export { Post };
