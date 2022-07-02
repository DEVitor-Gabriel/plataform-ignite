import { ApolloClient, InMemoryCache } from "@apollo/client";
// console.log(import.meta.env.VITE_API_ACCESS_TOKEN)
export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
    },
    cache: new InMemoryCache()
})