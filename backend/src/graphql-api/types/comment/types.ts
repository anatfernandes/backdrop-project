/* eslint-disable indent */
import { InputType, Field } from "type-graphql";
import { MinLength } from "class-validator";
import { Post, User, Comment } from "../../../models";

type ListCommentsResultType = Promise<Comment[] | null>;

@InputType()
class ListCommentsInput {
  @Field()
  @MinLength(1)
  post: string;
}

export { Post, User, Comment, ListCommentsInput, ListCommentsResultType };
