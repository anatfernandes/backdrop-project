import { gql } from "@apollo/client";

const DELETE_POST = gql`
  mutation deletePost($data: DeletePostInput!) {
    deletePost(data: $data)
  }
`;

export { DELETE_POST };
