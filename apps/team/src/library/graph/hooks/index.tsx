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
  ShakaGraphLnInfo: ShakaGraphResolveLnInfo;
};

export type QueryShakaGraph0000Args = {
  figure: ShakaGraphFigures0000;
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
