import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: "https://api-eu-west-2.graphcms.com/v2/cl4ywteie0dim01t82n3sd5db/master",
    cache: new InMemoryCache()
})