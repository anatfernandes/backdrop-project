import { gql } from "@apollo/client";

const USERS_BY_NAME = gql`
  query usersByName($name: String!) {
    usersByName(name: $name) {
      id
      name
      username
      avatar
    }
  }
`;

export { USERS_BY_NAME };
