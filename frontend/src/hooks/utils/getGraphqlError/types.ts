import { ApolloError } from "@apollo/client";

type GetGraphqlErrorParamType = ApolloError;

type NetworkErrorType = {
  result: { errors: { message: string }[] };
};

export type { GetGraphqlErrorParamType, NetworkErrorType };
