import { gql } from "@apollo/client";

const UPDATE_USER = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data: $data)
  }
`;

export { UPDATE_USER };
