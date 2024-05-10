import { Client } from "fauna";

const client = new Client({
  secret: process.env.FAUNADB_SECRET,
});

export { client };
