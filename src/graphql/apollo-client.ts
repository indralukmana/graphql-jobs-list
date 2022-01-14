import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache(),
});

export default apolloClient;
