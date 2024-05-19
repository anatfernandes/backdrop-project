import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($data: CreatePostInput!) {
    createPost(data: $data)
  }
`;

export { CREATE_POST };
