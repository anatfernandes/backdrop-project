import { gql } from "@apollo/client";

const COMMENT_POST = gql`
  mutation commentPost($data: CommentPostInput!) {
    commentPost(data: $data)
  }
`;

export { COMMENT_POST };
