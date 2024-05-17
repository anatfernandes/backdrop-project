/* eslint-disable indent */
import { InputType, Field } from "type-graphql";
import { ArrayMaxSize, ArrayMinSize, Length, MaxLength } from "class-validator";

@InputType()
class CreatePostInput {
  @Field(() => String)
  @Length(10, 30)
  owner: string;

  @Field()
  @Length(1, 2400)
  content: string;

  @Field({ defaultValue: "" })
  @MaxLength(30)
  locale: string;

  @Field(() => [String])
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  topics: string[];

  @Field(() => [String], { nullable: "items", defaultValue: [] })
  @ArrayMaxSize(3)
  links: string[];
}

export { CreatePostInput };
