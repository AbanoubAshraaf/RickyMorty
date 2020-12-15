import { onError } from '@apollo/client/link/error';

export const networkErrorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('[graphQLErrors]', graphQLErrors);
  console.log('[networkError]', networkError);

  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
