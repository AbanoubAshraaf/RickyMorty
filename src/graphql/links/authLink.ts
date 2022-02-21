import { setContext } from "@apollo/client/link/context";
import { IAuthLink } from "../GraphQl.interface";

export const authLink = setContext(async (_, { headers }: IAuthLink) => {
  // return the headers to the context so httpLink can read them

  return {
    headers: {
      ...headers,
    },
  };
});
