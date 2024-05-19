import { ApolloError } from "@apollo/client";

function getGraphqlError(error: ApolloError) {
  const { networkError } = error;
  const { message = "An error has occurred!" } =
    networkError?.result?.errors?.[0] || error;

  return message;
}

export { getGraphqlError };
