import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import { IncomingHttpHeaders } from "http";
import fetch from "isomorphic-unfetch";
import { envwebs } from "_env";

const { GRAPH_URI } = envwebs;

export const apolloInstance = (headers?: IncomingHttpHeaders | null) => {
  const enhancedFetch = async (url: RequestInfo, init: RequestInit) => {
    const response = await fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        "Access-Control-Allow-Origin": "*",
        Cookie: headers?.cookie ?? "",
      },
    });
    return response;
  };

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message: msg }) => {
            console.log(`Error: ${msg}`);
          });
        }

        if (networkError) {
          console.log(`Network error.`);
        }
      }),

      createUploadLink({
        uri: GRAPH_URI,
        fetchOptions: {
          mode: "cors",
        },
        credentials: "include",
        fetch: enhancedFetch,
      }),
    ]),
    cache: new InMemoryCache(),
  });
};
