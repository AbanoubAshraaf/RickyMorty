import { gql } from '@apollo/client';

export const charactersGql = gql`
  query characters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;
