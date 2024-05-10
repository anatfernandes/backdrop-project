import "reflect-metadata";
import path from "path";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { loadEnv } from "./config/env";
import { resolvers } from "./graphql-api";

loadEnv();

async function startApolloServer() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(process.cwd(), "schema.graphql"),
  });

  const apolloServer = new ApolloServer({ schema });

  await apolloServer.listen(4000);

  const apolloMiddleware = apolloServer.getMiddleware({
    path: "/graphql",
    cors: {
      origin: "*",
      methods: "GET, POST, OPTIONS",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });

  return { apolloMiddleware };
}

async function startServer() {
  const server = express();
  const { apolloMiddleware } = await startApolloServer();

  server
    .use(express.json())
    .use(cors())
    .use(apolloMiddleware)
    .get("/health", (_, res) => res.status(200).send("Server it's alive!!!"));

  return { server };
}

export { startServer };
