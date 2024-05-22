import { gql } from "@apollo/client";

const LIKE_POST = gql`
  mutation reactPost($data: ReactPostInput!) {
    reactPost(data: $data)
  }
`;

export { LIKE_POST };
