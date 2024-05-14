import { Field, ID, ObjectType } from "type-graphql";
import { ArrayMaxSize, Length } from "class-validator";
import { Topic, UserType } from "../index";

@ObjectType()
class FullUser {
  @Field(() => ID)
  id: string;

  @Field()
  @Length(3, 30)
  name: string;

  @Field()
  @Length(3, 30)
  username: string;

  @Field()
  email: string;

  @Field({ defaultValue: "" })
  avatar: string;

  @Field({ defaultValue: "" })
  background: string;

  @Field({ defaultValue: "" })
  @Length(0, 255)
  about: string;

  @Field()
  password: string;

  @Field(() => UserType)
  type: UserType;

  @Field(() => [Topic], { nullable: "items", defaultValue: [] })
  @ArrayMaxSize(3)
  topics: string[];

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

export { FullUser };
