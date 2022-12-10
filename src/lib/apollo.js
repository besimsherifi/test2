import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
//   uri: "https://testajredin.000webhostapp.com/graphql",
    uri:"https://wptest.x10.mx/graphql",
  cache: new InMemoryCache()
});

export default client;
