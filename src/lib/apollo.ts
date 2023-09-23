import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'

const cache = new InMemoryCache()

const retryLink = new RetryLink({
  delay: {
    initial: 1000,
    max: 10000,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error) => {
      return error.status === 429
    },
  },
})

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_APOLLO_URI })

const client = new ApolloClient({
  link: retryLink.concat(httpLink),
  cache,
})

export { client }
