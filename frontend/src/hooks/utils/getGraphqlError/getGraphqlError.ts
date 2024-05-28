import { GetGraphqlErrorParamType, NetworkErrorType } from "./types";

function getGraphqlError(error: GetGraphqlErrorParamType) {
  const networkError = error.networkError as unknown as NetworkErrorType;

  const { message = "An error has occurred!" } =
    networkError?.result?.errors?.[0] || error;

  return message;
}

export { getGraphqlError };
