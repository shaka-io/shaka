import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ShakaGraphData0000 = {
  __typename?: "ShakaGraphData0000";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphDataLnInfo = {
  __typename?: "ShakaGraphDataLnInfo";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphDataLnInvoiceCreate = {
  __typename?: "ShakaGraphDataLnInvoiceCreate";
  hash: Scalars["String"];
  ln: Scalars["String"];
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphFigures0000 = {
  locale: Scalars["String"];
};

export type ShakaGraphFiguresLnInfo = {
  locale: Scalars["String"];
};

export type ShakaGraphFiguresLnInvoiceCreate = {
  locale: Scalars["String"];
  satoshis: Scalars["String"];
};

export type ShakaGraphResolve0000 = {
  __typename?: "ShakaGraphResolve0000";
  data?: Maybe<ShakaGraphData0000>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveLnInfo = {
  __typename?: "ShakaGraphResolveLnInfo";
  data?: Maybe<ShakaGraphDataLnInfo>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveLnInvoiceCreate = {
  __typename?: "ShakaGraphResolveLnInvoiceCreate";
  data?: Maybe<ShakaGraphDataLnInvoiceCreate>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  ShakaGraphLnInvoiceCreate: ShakaGraphResolveLnInvoiceCreate;
};

export type MutationShakaGraphLnInvoiceCreateArgs = {
  figure: ShakaGraphFiguresLnInvoiceCreate;
};

export type Query = {
  __typename?: "Query";
  ShakaGraph0000: ShakaGraphResolve0000;
  ShakaGraphLnInfo: ShakaGraphResolveLnInfo;
};

export type QueryShakaGraph0000Args = {
  figure: ShakaGraphFigures0000;
};

export type QueryShakaGraphLnInfoArgs = {
  figure: ShakaGraphFiguresLnInfo;
};

export type ShakaGraphLnInfoQueryVariables = Exact<{
  figure: ShakaGraphFiguresLnInfo;
}>;

export type ShakaGraphLnInfoQuery = {
  __typename?: "Query";
  ShakaGraphLnInfo: {
    __typename?: "ShakaGraphResolveLnInfo";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphDataLnInfo";
      notes?: Array<string> | null;
    } | null;
  };
};

export type ShakaGraphLnInvoiceCreateMutationVariables = Exact<{
  figure: ShakaGraphFiguresLnInvoiceCreate;
}>;

export type ShakaGraphLnInvoiceCreateMutation = {
  __typename?: "Mutation";
  ShakaGraphLnInvoiceCreate: {
    __typename?: "ShakaGraphResolveLnInvoiceCreate";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "ShakaGraphDataLnInvoiceCreate";
      notes?: Array<string> | null;
      hash: string;
      ln: string;
    } | null;
  };
};

export type ShakaGraph0000QueryVariables = Exact<{
  figure: ShakaGraphFigures0000;
}>;

export type ShakaGraph0000Query = {
  __typename?: "Query";
  ShakaGraph0000: {
    __typename?: "ShakaGraphResolve0000";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "ShakaGraphData0000";
      notes?: Array<string> | null;
    } | null;
  };
};

export const ShakaGraphLnInfoDocument = gql`
  query ShakaGraphLnInfo($figure: ShakaGraphFiguresLnInfo!) {
    ShakaGraphLnInfo(figure: $figure) {
      pass
      message
      timestamp
      hash
      ray
      data {
        notes
      }
    }
  }
`;

/**
 * __useShakaGraphLnInfoQuery__
 *
 * To run a query within a React component, call `useShakaGraphLnInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphLnInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShakaGraphLnInfoQuery({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphLnInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShakaGraphLnInfoQuery,
    ShakaGraphLnInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShakaGraphLnInfoQuery, ShakaGraphLnInfoQueryVariables>(
    ShakaGraphLnInfoDocument,
    options
  );
}
export function useShakaGraphLnInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShakaGraphLnInfoQuery,
    ShakaGraphLnInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ShakaGraphLnInfoQuery,
    ShakaGraphLnInfoQueryVariables
  >(ShakaGraphLnInfoDocument, options);
}
export type ShakaGraphLnInfoQueryHookResult = ReturnType<
  typeof useShakaGraphLnInfoQuery
>;
export type ShakaGraphLnInfoLazyQueryHookResult = ReturnType<
  typeof useShakaGraphLnInfoLazyQuery
>;
export type ShakaGraphLnInfoQueryResult = Apollo.QueryResult<
  ShakaGraphLnInfoQuery,
  ShakaGraphLnInfoQueryVariables
>;
export const ShakaGraphLnInvoiceCreateDocument = gql`
  mutation ShakaGraphLnInvoiceCreate(
    $figure: ShakaGraphFiguresLnInvoiceCreate!
  ) {
    ShakaGraphLnInvoiceCreate(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        hash
        ln
      }
    }
  }
`;
export type ShakaGraphLnInvoiceCreateMutationFn = Apollo.MutationFunction<
  ShakaGraphLnInvoiceCreateMutation,
  ShakaGraphLnInvoiceCreateMutationVariables
>;

/**
 * __useShakaGraphLnInvoiceCreateMutation__
 *
 * To run a mutation, you first call `useShakaGraphLnInvoiceCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphLnInvoiceCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraphLnInvoiceCreateMutation, { data, loading, error }] = useShakaGraphLnInvoiceCreateMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphLnInvoiceCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraphLnInvoiceCreateMutation,
    ShakaGraphLnInvoiceCreateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraphLnInvoiceCreateMutation,
    ShakaGraphLnInvoiceCreateMutationVariables
  >(ShakaGraphLnInvoiceCreateDocument, options);
}
export type ShakaGraphLnInvoiceCreateMutationHookResult = ReturnType<
  typeof useShakaGraphLnInvoiceCreateMutation
>;
export type ShakaGraphLnInvoiceCreateMutationResult =
  Apollo.MutationResult<ShakaGraphLnInvoiceCreateMutation>;
export type ShakaGraphLnInvoiceCreateMutationOptions =
  Apollo.BaseMutationOptions<
    ShakaGraphLnInvoiceCreateMutation,
    ShakaGraphLnInvoiceCreateMutationVariables
  >;
export const ShakaGraph0000Document = gql`
  query ShakaGraph0000($figure: ShakaGraphFigures0000!) {
    ShakaGraph0000(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
      }
    }
  }
`;

/**
 * __useShakaGraph0000Query__
 *
 * To run a query within a React component, call `useShakaGraph0000Query` and pass it any options that fit your needs.
 * When your component renders, `useShakaGraph0000Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShakaGraph0000Query({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraph0000Query(
  baseOptions: Apollo.QueryHookOptions<
    ShakaGraph0000Query,
    ShakaGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShakaGraph0000Query, ShakaGraph0000QueryVariables>(
    ShakaGraph0000Document,
    options
  );
}
export function useShakaGraph0000LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShakaGraph0000Query,
    ShakaGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ShakaGraph0000Query, ShakaGraph0000QueryVariables>(
    ShakaGraph0000Document,
    options
  );
}
export type ShakaGraph0000QueryHookResult = ReturnType<
  typeof useShakaGraph0000Query
>;
export type ShakaGraph0000LazyQueryHookResult = ReturnType<
  typeof useShakaGraph0000LazyQuery
>;
export type ShakaGraph0000QueryResult = Apollo.QueryResult<
  ShakaGraph0000Query,
  ShakaGraph0000QueryVariables
>;