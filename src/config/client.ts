import { ApolloClient } from "@apollo/client";

import { URL } from "../shared/consts";
import { cache } from "./cache";

export const client = new ApolloClient({
  uri: URL,
  cache,
});
