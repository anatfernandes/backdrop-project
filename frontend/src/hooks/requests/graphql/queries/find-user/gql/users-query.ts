import { gql } from "@apollo/client";

const USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      name
      username
      about
      avatar
      background
      isFollowing

      following {
        id
        name
        username
        about
        avatar
      }

      followed {
        id
        name
        username
        about
        avatar
      }

      posts {
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

      liked {
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

      saved {
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
  }
`;

const USER_FOR_UPDATE = gql`
  query userForUpdate($id: String!) {
    user(id: $id) {
      id
      name
      email
      about
      avatar
      background
      topics {
        id
      }
    }
  }
`;

export { USER, USER_FOR_UPDATE };
