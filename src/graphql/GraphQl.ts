import { ApolloLink,ApolloClient } from '@apollo/client';

import { authLink, rickyCache, httpLink, networkErrorLink } from './links';

export const rickyClient = new ApolloClient({
  cache: rickyCache,
  link: ApolloLink.from([authLink, networkErrorLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});


