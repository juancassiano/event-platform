import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ofbgts028f01xles1q2yof/master",
  cache: new InMemoryCache(),
});
