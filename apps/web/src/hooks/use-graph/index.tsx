import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { apollo } from "@shaka-web-library/apollo";
import type { AppProps } from "next/app";
import * as React from "react";
import { configuration } from "../../configuration";

const {
  GRAPH: { STATE_NAME },
} = configuration;

export type TypesWebsHooksGraph = {
  graph: ApolloClient<NormalizedCacheObject>;
};

export function useGraph(
  pageProps: AppProps["pageProps"]
): TypesWebsHooksGraph {
  const state = pageProps[STATE_NAME];

  const graphInitial = React.useMemo(
    () => apollo({ initialState: state }),
    [state]
  );

  const [graph] =
    React.useState<ApolloClient<NormalizedCacheObject>>(graphInitial);

  return {
    graph,
  };
}
