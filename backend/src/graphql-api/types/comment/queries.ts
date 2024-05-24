import { Resolver, Query, Authorized, Arg } from "type-graphql";
import * as service from "../../../services/comment";
import { Comment, ListCommentsInput, ListCommentsResultType } from "./types";

@Resolver()
class CommentQueriesResolver {
  @Authorized()
  @Query(() => [Comment])
  comments(@Arg("data") data: ListCommentsInput): ListCommentsResultType {
    return service.listComments(data);
  }
}

export { CommentQueriesResolver };
