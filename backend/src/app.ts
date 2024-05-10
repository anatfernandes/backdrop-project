import { startServer } from "./server";

const port = process.env.PORT || 5000;
const url = `http://localhost:${port}`;

startServer().then(({ server }) => {
  server.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`GraphQL server running on ${url}/graphql`);
    console.log(`Server running on ${url}`);
  });
});
