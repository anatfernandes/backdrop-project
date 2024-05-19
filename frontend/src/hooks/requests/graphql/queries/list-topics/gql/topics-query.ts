import { gql } from "@apollo/client";

const TOPICS = gql`
  query topics {
    topics {
      id
      name
    }
  }
`;

export { TOPICS };
