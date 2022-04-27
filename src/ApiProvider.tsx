import React from "react";

import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client";

type Props = {
  children: React.ReactNode;
};

export default function ApiProvider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
