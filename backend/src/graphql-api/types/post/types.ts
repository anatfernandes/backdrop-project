/* eslint-disable indent */
import { InputType, Field } from "type-graphql";
import { ArrayMaxSize, ArrayMinSize, Length, MaxLength, Min } from "class-validator";
import { Post, User, Topic, ReactionType } from "../../../models";
import * as listPostsType from "../../../services/post/types";

type ListPostsResultType = Promise<Post[] | null>;

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

@InputType()
class UpdatePostInput {
  @Field()
  id: string;

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

@InputType()
class ReactPostInput {
  @Field()
  user: string;

  @Field()
  post: string;

  @Field()
  type: ReactionType;

  @Field()
  value: boolean;
}

@InputType()
class SavePostInput {
  @Field()
  user: string;

  @Field()
  post: string;

  @Field()
  value: boolean;
}

@InputType()
class DeletePostInput {
  @Field()
  post: string;
}

@InputType()
class ListPostsSortInput {
  @Field({ defaultValue: "date" })
  by: listPostsType.ListPostsSortByType;

  @Field({ defaultValue: "desc" })
  direction: listPostsType.ListPostsSortDirectionType;
}

@InputType()
class ListPostsWhereInput {
  @Field({ defaultValue: "" })
  locale: string;

  @Field(() => [String], { defaultValue: [], nullable: true })
  users: string[];

  @Field(() => [String], { defaultValue: [], nullable: true })
  topics: string[];
}

@InputType()
class ListPostsInput {
  @Field({ defaultValue: "" })
  user: string;

  @Field({ defaultValue: "" })
  context: listPostsType.ListPostsContextType;

  @Field({ defaultValue: 20 })
  limit: number;

  @Field({ defaultValue: 1 })
  @Min(1)
  page: number;

  @Field({ defaultValue: { by: "date", direction: "asc" } })
  sort: ListPostsSortInput;

  @Field({ defaultValue: { context: "", locale: "", users: [], topics: [] } })
  where: ListPostsWhereInput;
}

export {
  Post,
  User,
  Topic,
  ListPostsResultType,
  ListPostsInput,
  CreatePostInput,
  UpdatePostInput,
  ReactPostInput,
  SavePostInput,
  DeletePostInput,
};
