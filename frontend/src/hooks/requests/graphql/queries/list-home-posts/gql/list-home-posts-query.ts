import { gql } from "@apollo/client";

const POSTS = gql`
  query listPosts($data: ListPostsInput!) {
    posts(data: $data) {
      id
      content
      locale
      links
      createdAt
      reactions
      comments
      saved
      liked
      topics {
        id
        name
      }
      owner {
        id
        name
        username
        avatar
      }
    }
  }
`;

export { POSTS };
