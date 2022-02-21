import { createHttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
  fetch,
});
