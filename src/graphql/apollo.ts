import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://curious-gobbler-90.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "F4Exw3y97Jscwt09sEBNtoVoc4g3DJ3vTAP0SEKDkuLr1DXF8o9Z91ctl9kg5ihr",
  },
});

// uri: "https://immense-goshawk-38.hasura.app/v1/graphql",
// "LnJBnSlXLOjiL7cVK5RUteRVygmXsGS2JPNzjC6q7OUVwUzMy6E9nnoK4gGC8Lxw",
