import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const BASE_URI = import.meta.env.VITE_API_URI;

const httpLink = new HttpLink({ uri: `${BASE_URI}/graphql` });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem("our-cause.com") ?? "{}")?.token;

  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

export { apolloClient };
