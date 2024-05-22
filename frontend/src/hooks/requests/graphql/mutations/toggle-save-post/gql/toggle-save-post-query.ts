import { gql } from "@apollo/client";

const SAVE_POST = gql`
  mutation savePost($data: SavePostInput!) {
    savePost(data: $data)
  }
`;

export { SAVE_POST };
