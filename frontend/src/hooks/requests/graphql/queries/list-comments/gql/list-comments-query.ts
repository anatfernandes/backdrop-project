import { gql } from "@apollo/client";

const COMMENTS = gql`
  query getComments($data: ListCommentsInput!) {
    comments(data: $data) {
      message
      user {
        id
        name
        username
        avatar
      }
      post {
        owner {
          id
        }
      }
      createdAt
    }
  }
`;

export { COMMENTS };
