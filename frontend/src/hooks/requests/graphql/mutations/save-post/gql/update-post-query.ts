import { gql } from "@apollo/client";

const UPDATE_POST = gql`
  mutation updatePost($data: UpdatePostInput!) {
    updatePost(data: $data)
  }
`;

export { UPDATE_POST };
