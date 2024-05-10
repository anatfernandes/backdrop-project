import { ApolloClient, InMemoryCache } from "@apollo/client";

const BASE_URI = import.meta.env.VITE_API_URI;

const apolloClient = new ApolloClient({
  uri: `${BASE_URI}/graphql`,
  cache: new InMemoryCache(),
});

export { apolloClient };
