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

export type LnCrowdfund = {
  __typename?: "LnCrowdfund";
  amount: Scalars["String"];
  created: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  records?: Maybe<ModelsRecords>;
  updated: Scalars["String"];
};

export type ModelsNotes = {
  __typename?: "ModelsNotes";
  date: Scalars["String"];
  key: Scalars["String"];
  list: Array<Scalars["String"]>;
};

export type ModelsRecords = {
  __typename?: "ModelsRecords";
  notes?: Maybe<Array<ModelsNotes>>;
};

export type Mutation = {
  __typename?: "Mutation";
  ShakaGraph0001: ShakaGraphResolve0001;
  ShakaGraph0002: ShakaGraphResolve0002;
  ShakaGraphLnInvoiceConfirm: ShakaGraphResolveLnInvoiceConfirm;
  ShakaGraphLnInvoiceCreate: ShakaGraphResolveLnInvoiceCreate;
};

export type MutationShakaGraph0001Args = {
  figure: ShakaGraphFigures0001;
};

export type MutationShakaGraph0002Args = {
  figure: ShakaGraphFigures0002;
};

export type MutationShakaGraphLnInvoiceConfirmArgs = {
  figure: ShakaGraphFiguresLnInvoiceConfirm;
};

export type MutationShakaGraphLnInvoiceCreateArgs = {
  figure: ShakaGraphFiguresLnInvoiceCreate;
};

export type Query = {
  __typename?: "Query";
  ShakaGraph0000: ShakaGraphResolve0000;
  ShakaGraph0003: ShakaGraphResolve0003;
  ShakaGraphLnInfo: ShakaGraphResolveLnInfo;
};

export type QueryShakaGraph0000Args = {
  figure: ShakaGraphFigures0000;
};

export type QueryShakaGraph0003Args = {
  figure: ShakaGraphFigures0003;
};

export type QueryShakaGraphLnInfoArgs = {
  figure: ShakaGraphFiguresLnInfo;
};

export type ShakaGraphData0000 = {
  __typename?: "ShakaGraphData0000";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphData0001 = {
  __typename?: "ShakaGraphData0001";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphData0002 = {
  __typename?: "ShakaGraphData0002";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphData0003 = {
  __typename?: "ShakaGraphData0003";
  list?: Maybe<Array<LnCrowdfund>>;
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphDataLnInfo = {
  __typename?: "ShakaGraphDataLnInfo";
  notes?: Maybe<Array<Scalars["String"]>>;
  version?: Maybe<Scalars["String"]>;
};

export type ShakaGraphDataLnInvoiceConfirm = {
  __typename?: "ShakaGraphDataLnInvoiceConfirm";
  notes?: Maybe<Array<Scalars["String"]>>;
  settled: Scalars["Boolean"];
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

export type ShakaGraphFigures0001 = {
  contact: Scalars["String"];
  content: Scalars["String"];
  locale: Scalars["String"];
  title: Scalars["String"];
};

export type ShakaGraphFigures0002 = {
  amount: Scalars["String"];
  locale: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  note?: InputMaybe<Scalars["String"]>;
};

export type ShakaGraphFigures0003 = {
  locale: Scalars["String"];
};

export type ShakaGraphFiguresLnInfo = {
  locale: Scalars["String"];
};

export type ShakaGraphFiguresLnInvoiceConfirm = {
  hash: Scalars["String"];
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

export type ShakaGraphResolve0001 = {
  __typename?: "ShakaGraphResolve0001";
  data?: Maybe<ShakaGraphData0001>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolve0002 = {
  __typename?: "ShakaGraphResolve0002";
  data?: Maybe<ShakaGraphData0002>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolve0003 = {
  __typename?: "ShakaGraphResolve0003";
  data?: Maybe<ShakaGraphData0003>;
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

export type ShakaGraphResolveLnInvoiceConfirm = {
  __typename?: "ShakaGraphResolveLnInvoiceConfirm";
  data?: Maybe<ShakaGraphDataLnInvoiceConfirm>;
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

export type ShakaGraphLnInvoiceConfirmMutationVariables = Exact<{
  figure: ShakaGraphFiguresLnInvoiceConfirm;
}>;

export type ShakaGraphLnInvoiceConfirmMutation = {
  __typename?: "Mutation";
  ShakaGraphLnInvoiceConfirm: {
    __typename?: "ShakaGraphResolveLnInvoiceConfirm";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "ShakaGraphDataLnInvoiceConfirm";
      notes?: Array<string> | null;
      settled: boolean;
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

export type ShakaGraph0001MutationVariables = Exact<{
  figure: ShakaGraphFigures0001;
}>;

export type ShakaGraph0001Mutation = {
  __typename?: "Mutation";
  ShakaGraph0001: {
    __typename?: "ShakaGraphResolve0001";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphData0001";
      notes?: Array<string> | null;
    } | null;
  };
};

export type ShakaGraph0002MutationVariables = Exact<{
  figure: ShakaGraphFigures0002;
}>;

export type ShakaGraph0002Mutation = {
  __typename?: "Mutation";
  ShakaGraph0002: {
    __typename?: "ShakaGraphResolve0002";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphData0002";
      notes?: Array<string> | null;
    } | null;
  };
};

export type ShakaGraph0003QueryVariables = Exact<{
  figure: ShakaGraphFigures0003;
}>;

export type ShakaGraph0003Query = {
  __typename?: "Query";
  ShakaGraph0003: {
    __typename?: "ShakaGraphResolve0003";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphData0003";
      notes?: Array<string> | null;
      list?: Array<{
        __typename?: "LnCrowdfund";
        created: string;
        key: string;
        name?: string | null;
        note?: string | null;
        amount: string;
      }> | null;
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
export const ShakaGraphLnInvoiceConfirmDocument = gql`
  mutation ShakaGraphLnInvoiceConfirm(
    $figure: ShakaGraphFiguresLnInvoiceConfirm!
  ) {
    ShakaGraphLnInvoiceConfirm(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        settled
      }
    }
  }
`;
export type ShakaGraphLnInvoiceConfirmMutationFn = Apollo.MutationFunction<
  ShakaGraphLnInvoiceConfirmMutation,
  ShakaGraphLnInvoiceConfirmMutationVariables
>;

/**
 * __useShakaGraphLnInvoiceConfirmMutation__
 *
 * To run a mutation, you first call `useShakaGraphLnInvoiceConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphLnInvoiceConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraphLnInvoiceConfirmMutation, { data, loading, error }] = useShakaGraphLnInvoiceConfirmMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphLnInvoiceConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraphLnInvoiceConfirmMutation,
    ShakaGraphLnInvoiceConfirmMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraphLnInvoiceConfirmMutation,
    ShakaGraphLnInvoiceConfirmMutationVariables
  >(ShakaGraphLnInvoiceConfirmDocument, options);
}
export type ShakaGraphLnInvoiceConfirmMutationHookResult = ReturnType<
  typeof useShakaGraphLnInvoiceConfirmMutation
>;
export type ShakaGraphLnInvoiceConfirmMutationResult =
  Apollo.MutationResult<ShakaGraphLnInvoiceConfirmMutation>;
export type ShakaGraphLnInvoiceConfirmMutationOptions =
  Apollo.BaseMutationOptions<
    ShakaGraphLnInvoiceConfirmMutation,
    ShakaGraphLnInvoiceConfirmMutationVariables
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
export const ShakaGraph0001Document = gql`
  mutation ShakaGraph0001($figure: ShakaGraphFigures0001!) {
    ShakaGraph0001(figure: $figure) {
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
export type ShakaGraph0001MutationFn = Apollo.MutationFunction<
  ShakaGraph0001Mutation,
  ShakaGraph0001MutationVariables
>;

/**
 * __useShakaGraph0001Mutation__
 *
 * To run a mutation, you first call `useShakaGraph0001Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraph0001Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraph0001Mutation, { data, loading, error }] = useShakaGraph0001Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraph0001Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraph0001Mutation,
    ShakaGraph0001MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraph0001Mutation,
    ShakaGraph0001MutationVariables
  >(ShakaGraph0001Document, options);
}
export type ShakaGraph0001MutationHookResult = ReturnType<
  typeof useShakaGraph0001Mutation
>;
export type ShakaGraph0001MutationResult =
  Apollo.MutationResult<ShakaGraph0001Mutation>;
export type ShakaGraph0001MutationOptions = Apollo.BaseMutationOptions<
  ShakaGraph0001Mutation,
  ShakaGraph0001MutationVariables
>;
export const ShakaGraph0002Document = gql`
  mutation ShakaGraph0002($figure: ShakaGraphFigures0002!) {
    ShakaGraph0002(figure: $figure) {
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
export type ShakaGraph0002MutationFn = Apollo.MutationFunction<
  ShakaGraph0002Mutation,
  ShakaGraph0002MutationVariables
>;

/**
 * __useShakaGraph0002Mutation__
 *
 * To run a mutation, you first call `useShakaGraph0002Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraph0002Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraph0002Mutation, { data, loading, error }] = useShakaGraph0002Mutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraph0002Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraph0002Mutation,
    ShakaGraph0002MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraph0002Mutation,
    ShakaGraph0002MutationVariables
  >(ShakaGraph0002Document, options);
}
export type ShakaGraph0002MutationHookResult = ReturnType<
  typeof useShakaGraph0002Mutation
>;
export type ShakaGraph0002MutationResult =
  Apollo.MutationResult<ShakaGraph0002Mutation>;
export type ShakaGraph0002MutationOptions = Apollo.BaseMutationOptions<
  ShakaGraph0002Mutation,
  ShakaGraph0002MutationVariables
>;
export const ShakaGraph0003Document = gql`
  query ShakaGraph0003($figure: ShakaGraphFigures0003!) {
    ShakaGraph0003(figure: $figure) {
      pass
      message
      timestamp
      hash
      ray
      data {
        notes
        list {
          created
          key
          name
          note
          amount
        }
      }
    }
  }
`;

/**
 * __useShakaGraph0003Query__
 *
 * To run a query within a React component, call `useShakaGraph0003Query` and pass it any options that fit your needs.
 * When your component renders, `useShakaGraph0003Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShakaGraph0003Query({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraph0003Query(
  baseOptions: Apollo.QueryHookOptions<
    ShakaGraph0003Query,
    ShakaGraph0003QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShakaGraph0003Query, ShakaGraph0003QueryVariables>(
    ShakaGraph0003Document,
    options
  );
}
export function useShakaGraph0003LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShakaGraph0003Query,
    ShakaGraph0003QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ShakaGraph0003Query, ShakaGraph0003QueryVariables>(
    ShakaGraph0003Document,
    options
  );
}
export type ShakaGraph0003QueryHookResult = ReturnType<
  typeof useShakaGraph0003Query
>;
export type ShakaGraph0003LazyQueryHookResult = ReturnType<
  typeof useShakaGraph0003LazyQuery
>;
export type ShakaGraph0003QueryResult = Apollo.QueryResult<
  ShakaGraph0003Query,
  ShakaGraph0003QueryVariables
>;
