import { gql } from "@apollo/client";

const FOLLOW_USER = gql`
  mutation followUser($data: FollowUserInput!) {
    followUser(data: $data)
  }
`;

export { FOLLOW_USER };
