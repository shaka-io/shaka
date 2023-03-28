import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { apolloInstance } from "@shaka-web-library/apollo/instance";
import merge from "deepmerge";
import { IncomingHttpHeaders } from "http";
import isEqual from "lodash/isEqual";

type TypesApolloInitial = NormalizedCacheObject | undefined;

type TypesApollo = {
  headers?: IncomingHttpHeaders | null;
  initialState?: TypesApolloInitial | null;
};

let apolloclient: ApolloClient<NormalizedCacheObject> | undefined;

export const apollo = (
  { headers, initialState }: TypesApollo = {
    headers: null,
    initialState: null,
  }
) => {
  const client = apolloclient ?? apolloInstance(headers);
  if (initialState) {
    const existingCache = client.extract();
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    client.cache.restore(data);
  }

  if (typeof window === "undefined") {
    return client;
  }

  if (!apolloclient) {
    apolloclient = client;
  }

  return client;
};
