import { GraphQLRequest } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
    },
  };
});
