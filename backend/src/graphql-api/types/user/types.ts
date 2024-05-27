/* eslint-disable indent */
import { Field, InputType } from "type-graphql";
import { ArrayMinSize, Length, Matches, MaxLength, ValidateIf } from "class-validator";
import { User, Post, Topic } from "../../../models";

@InputType()
class UpdateUserInput {
  @Field()
  @Length(3, 30)
  name: string;

  @Field({ defaultValue: "" })
  @ValidateIf((user) => user.avatar?.length)
  @Matches(/\.(?:jpg|gif|png|jpeg|svg)/, {
    message: "'avatar' must be a valid image",
  })
  avatar: string;

  @Field({ defaultValue: "" })
  @ValidateIf((user) => user.background?.length)
  @Matches(/\.(?:jpg|gif|png|jpeg|svg)/, {
    message: "'background' must be a valid image",
  })
  background: string;

  @Field({ defaultValue: "" })
  email: string;

  @Field({ defaultValue: "" })
  @MaxLength(200)
  about: string;

  @Field(() => [String])
  @ArrayMinSize(1)
  topics: string[];
}

@InputType()
class FollowUserInput {
  @Field()
  followed: string;

  @Field()
  value: boolean;
}

export { Post, User, Topic, UpdateUserInput, FollowUserInput };
