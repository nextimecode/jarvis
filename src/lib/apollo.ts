import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'

const cache = new InMemoryCache()

const retryLink = new RetryLink({
  delay: {
    initial: 1000, // Tempo inicial de atraso em milissegundos
    max: 10000, // Tempo máximo de atraso em milissegundos
    jitter: true, // Adicionar ou subtrair um fator aleatório ao atraso
  },
  attempts: {
    max: 5, // Número máximo de tentativas
    retryIf: (error, operation) => {
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
