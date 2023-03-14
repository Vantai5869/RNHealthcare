import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'http://3.1.79.226:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // set authentication headers here if needed
});

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.result && networkError.result.code === 'ETIMEDOUT') {
    console.log('Request timed out');
  }
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
      timeout: 5000, // set timeout value in milliseconds
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
});
