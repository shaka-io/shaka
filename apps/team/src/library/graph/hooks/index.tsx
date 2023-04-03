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

export type Email = {
  __typename?: "Email";
  address: Scalars["String"];
  created: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  records?: Maybe<EmailRecords>;
  updated: Scalars["String"];
};

export type EmailRecords = {
  __typename?: "EmailRecords";
  date: Scalars["String"];
  from: Scalars["String"];
  messageid: Scalars["String"];
  notes?: Maybe<Array<ModelsNotes>>;
  recipient: Scalars["String"];
  sender: Scalars["String"];
  subject: Scalars["String"];
  text: Scalars["String"];
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
  ShakaGraphTeamAdd: ShakaGraphResolveTeamAdd;
  ShakaGraphTeamLoginAttempt: ShakaGraphResolveTeamLoginAttempt;
  ShakaGraphTeamLoginConfirm: ShakaGraphResolveTeamLoginConfirm;
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

export type MutationShakaGraphTeamAddArgs = {
  figure: ShakaGraphFiguresTeamAdd;
};

export type MutationShakaGraphTeamLoginAttemptArgs = {
  figure: ShakaGraphFiguresTeamLoginAttempt;
};

export type MutationShakaGraphTeamLoginConfirmArgs = {
  figure: ShakaGraphFiguresTeamLoginConfirm;
};

export type Query = {
  __typename?: "Query";
  ShakaGraph0000: ShakaGraphResolve0000;
  ShakaGraph0003: ShakaGraphResolve0003;
  ShakaGraphLnInfo: ShakaGraphResolveLnInfo;
  ShakaGraphTeamSessionHydrate: ShakaGraphResolveTeamSessionHydrate;
  ShakaGraphTeamSessionValidation: ShakaGraphResolveTeamSessionValidation;
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

export type QueryShakaGraphTeamSessionHydrateArgs = {
  figure: ShakaGraphFiguresTeamSessionHydrate;
};

export type QueryShakaGraphTeamSessionValidationArgs = {
  figure: ShakaGraphFiguresTeamSessionValidation;
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

export type ShakaGraphDataTeamAdd = {
  __typename?: "ShakaGraphDataTeamAdd";
  notes?: Maybe<Array<Scalars["String"]>>;
  read?: Maybe<Team>;
};

export type ShakaGraphDataTeamLoginAttempt = {
  __typename?: "ShakaGraphDataTeamLoginAttempt";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphDataTeamLoginConfirm = {
  __typename?: "ShakaGraphDataTeamLoginConfirm";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type ShakaGraphDataTeamSessionHydrate = {
  __typename?: "ShakaGraphDataTeamSessionHydrate";
  emails?: Maybe<Array<Email>>;
  notes?: Maybe<Array<Scalars["String"]>>;
  read?: Maybe<Team>;
};

export type ShakaGraphDataTeamSessionValidation = {
  __typename?: "ShakaGraphDataTeamSessionValidation";
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

export type ShakaGraphFiguresTeamAdd = {
  credential: Scalars["String"];
  locale: Scalars["String"];
  validation: Scalars["String"];
};

export type ShakaGraphFiguresTeamLoginAttempt = {
  credential: Scalars["String"];
  locale: Scalars["String"];
};

export type ShakaGraphFiguresTeamLoginConfirm = {
  credential: Scalars["String"];
  locale: Scalars["String"];
  passcode: Scalars["String"];
};

export type ShakaGraphFiguresTeamSessionHydrate = {
  locale: Scalars["String"];
};

export type ShakaGraphFiguresTeamSessionValidation = {
  locale: Scalars["String"];
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

export type ShakaGraphResolveTeamAdd = {
  __typename?: "ShakaGraphResolveTeamAdd";
  data?: Maybe<ShakaGraphDataTeamAdd>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveTeamLoginAttempt = {
  __typename?: "ShakaGraphResolveTeamLoginAttempt";
  data?: Maybe<ShakaGraphDataTeamLoginAttempt>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveTeamLoginConfirm = {
  __typename?: "ShakaGraphResolveTeamLoginConfirm";
  data?: Maybe<ShakaGraphDataTeamLoginConfirm>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveTeamSessionHydrate = {
  __typename?: "ShakaGraphResolveTeamSessionHydrate";
  data?: Maybe<ShakaGraphDataTeamSessionHydrate>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type ShakaGraphResolveTeamSessionValidation = {
  __typename?: "ShakaGraphResolveTeamSessionValidation";
  data?: Maybe<ShakaGraphDataTeamSessionValidation>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  ray: Scalars["String"];
  timestamp: Scalars["Float"];
};

export type Team = {
  __typename?: "Team";
  created: Scalars["String"];
  credential: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  records?: Maybe<TeamRecords>;
  updated: Scalars["String"];
  validation: Scalars["String"];
};

export type TeamRecords = {
  __typename?: "TeamRecords";
  notes?: Maybe<Array<ModelsNotes>>;
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

export type ShakaGraphTeamLoginAttemptMutationVariables = Exact<{
  figure: ShakaGraphFiguresTeamLoginAttempt;
}>;

export type ShakaGraphTeamLoginAttemptMutation = {
  __typename?: "Mutation";
  ShakaGraphTeamLoginAttempt: {
    __typename?: "ShakaGraphResolveTeamLoginAttempt";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "ShakaGraphDataTeamLoginAttempt";
      notes?: Array<string> | null;
    } | null;
  };
};

export type ShakaGraphTeamLoginConfirmMutationVariables = Exact<{
  figure: ShakaGraphFiguresTeamLoginConfirm;
}>;

export type ShakaGraphTeamLoginConfirmMutation = {
  __typename?: "Mutation";
  ShakaGraphTeamLoginConfirm: {
    __typename?: "ShakaGraphResolveTeamLoginConfirm";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "ShakaGraphDataTeamLoginConfirm";
      notes?: Array<string> | null;
    } | null;
  };
};

export type ShakaGraphTeamSessionHydrateQueryVariables = Exact<{
  figure: ShakaGraphFiguresTeamSessionHydrate;
}>;

export type ShakaGraphTeamSessionHydrateQuery = {
  __typename?: "Query";
  ShakaGraphTeamSessionHydrate: {
    __typename?: "ShakaGraphResolveTeamSessionHydrate";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphDataTeamSessionHydrate";
      notes?: Array<string> | null;
      read?: {
        __typename?: "Team";
        created: string;
        key: string;
        credential: string;
      } | null;
      emails?: Array<{
        __typename?: "Email";
        created: string;
        key: string;
        address: string;
        records?: {
          __typename?: "EmailRecords";
          recipient: string;
          sender: string;
          subject: string;
          date: string;
          from: string;
          text: string;
        } | null;
      }> | null;
    } | null;
  };
};

export type ShakaGraphTeamSessionValidationQueryVariables = Exact<{
  figure: ShakaGraphFiguresTeamSessionValidation;
}>;

export type ShakaGraphTeamSessionValidationQuery = {
  __typename?: "Query";
  ShakaGraphTeamSessionValidation: {
    __typename?: "ShakaGraphResolveTeamSessionValidation";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    ray: string;
    data?: {
      __typename?: "ShakaGraphDataTeamSessionValidation";
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
export const ShakaGraphTeamLoginAttemptDocument = gql`
  mutation ShakaGraphTeamLoginAttempt(
    $figure: ShakaGraphFiguresTeamLoginAttempt!
  ) {
    ShakaGraphTeamLoginAttempt(figure: $figure) {
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
export type ShakaGraphTeamLoginAttemptMutationFn = Apollo.MutationFunction<
  ShakaGraphTeamLoginAttemptMutation,
  ShakaGraphTeamLoginAttemptMutationVariables
>;

/**
 * __useShakaGraphTeamLoginAttemptMutation__
 *
 * To run a mutation, you first call `useShakaGraphTeamLoginAttemptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphTeamLoginAttemptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraphTeamLoginAttemptMutation, { data, loading, error }] = useShakaGraphTeamLoginAttemptMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphTeamLoginAttemptMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraphTeamLoginAttemptMutation,
    ShakaGraphTeamLoginAttemptMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraphTeamLoginAttemptMutation,
    ShakaGraphTeamLoginAttemptMutationVariables
  >(ShakaGraphTeamLoginAttemptDocument, options);
}
export type ShakaGraphTeamLoginAttemptMutationHookResult = ReturnType<
  typeof useShakaGraphTeamLoginAttemptMutation
>;
export type ShakaGraphTeamLoginAttemptMutationResult =
  Apollo.MutationResult<ShakaGraphTeamLoginAttemptMutation>;
export type ShakaGraphTeamLoginAttemptMutationOptions =
  Apollo.BaseMutationOptions<
    ShakaGraphTeamLoginAttemptMutation,
    ShakaGraphTeamLoginAttemptMutationVariables
  >;
export const ShakaGraphTeamLoginConfirmDocument = gql`
  mutation ShakaGraphTeamLoginConfirm(
    $figure: ShakaGraphFiguresTeamLoginConfirm!
  ) {
    ShakaGraphTeamLoginConfirm(figure: $figure) {
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
export type ShakaGraphTeamLoginConfirmMutationFn = Apollo.MutationFunction<
  ShakaGraphTeamLoginConfirmMutation,
  ShakaGraphTeamLoginConfirmMutationVariables
>;

/**
 * __useShakaGraphTeamLoginConfirmMutation__
 *
 * To run a mutation, you first call `useShakaGraphTeamLoginConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphTeamLoginConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shakaGraphTeamLoginConfirmMutation, { data, loading, error }] = useShakaGraphTeamLoginConfirmMutation({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphTeamLoginConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ShakaGraphTeamLoginConfirmMutation,
    ShakaGraphTeamLoginConfirmMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ShakaGraphTeamLoginConfirmMutation,
    ShakaGraphTeamLoginConfirmMutationVariables
  >(ShakaGraphTeamLoginConfirmDocument, options);
}
export type ShakaGraphTeamLoginConfirmMutationHookResult = ReturnType<
  typeof useShakaGraphTeamLoginConfirmMutation
>;
export type ShakaGraphTeamLoginConfirmMutationResult =
  Apollo.MutationResult<ShakaGraphTeamLoginConfirmMutation>;
export type ShakaGraphTeamLoginConfirmMutationOptions =
  Apollo.BaseMutationOptions<
    ShakaGraphTeamLoginConfirmMutation,
    ShakaGraphTeamLoginConfirmMutationVariables
  >;
export const ShakaGraphTeamSessionHydrateDocument = gql`
  query ShakaGraphTeamSessionHydrate(
    $figure: ShakaGraphFiguresTeamSessionHydrate!
  ) {
    ShakaGraphTeamSessionHydrate(figure: $figure) {
      pass
      message
      timestamp
      hash
      ray
      data {
        notes
        read {
          created
          key
          credential
        }
        emails {
          created
          key
          address
          records {
            recipient
            sender
            subject
            date
            from
            text
          }
        }
      }
    }
  }
`;

/**
 * __useShakaGraphTeamSessionHydrateQuery__
 *
 * To run a query within a React component, call `useShakaGraphTeamSessionHydrateQuery` and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphTeamSessionHydrateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShakaGraphTeamSessionHydrateQuery({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphTeamSessionHydrateQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShakaGraphTeamSessionHydrateQuery,
    ShakaGraphTeamSessionHydrateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ShakaGraphTeamSessionHydrateQuery,
    ShakaGraphTeamSessionHydrateQueryVariables
  >(ShakaGraphTeamSessionHydrateDocument, options);
}
export function useShakaGraphTeamSessionHydrateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShakaGraphTeamSessionHydrateQuery,
    ShakaGraphTeamSessionHydrateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ShakaGraphTeamSessionHydrateQuery,
    ShakaGraphTeamSessionHydrateQueryVariables
  >(ShakaGraphTeamSessionHydrateDocument, options);
}
export type ShakaGraphTeamSessionHydrateQueryHookResult = ReturnType<
  typeof useShakaGraphTeamSessionHydrateQuery
>;
export type ShakaGraphTeamSessionHydrateLazyQueryHookResult = ReturnType<
  typeof useShakaGraphTeamSessionHydrateLazyQuery
>;
export type ShakaGraphTeamSessionHydrateQueryResult = Apollo.QueryResult<
  ShakaGraphTeamSessionHydrateQuery,
  ShakaGraphTeamSessionHydrateQueryVariables
>;
export const ShakaGraphTeamSessionValidationDocument = gql`
  query ShakaGraphTeamSessionValidation(
    $figure: ShakaGraphFiguresTeamSessionValidation!
  ) {
    ShakaGraphTeamSessionValidation(figure: $figure) {
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
 * __useShakaGraphTeamSessionValidationQuery__
 *
 * To run a query within a React component, call `useShakaGraphTeamSessionValidationQuery` and pass it any options that fit your needs.
 * When your component renders, `useShakaGraphTeamSessionValidationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShakaGraphTeamSessionValidationQuery({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useShakaGraphTeamSessionValidationQuery(
  baseOptions: Apollo.QueryHookOptions<
    ShakaGraphTeamSessionValidationQuery,
    ShakaGraphTeamSessionValidationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ShakaGraphTeamSessionValidationQuery,
    ShakaGraphTeamSessionValidationQueryVariables
  >(ShakaGraphTeamSessionValidationDocument, options);
}
export function useShakaGraphTeamSessionValidationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShakaGraphTeamSessionValidationQuery,
    ShakaGraphTeamSessionValidationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ShakaGraphTeamSessionValidationQuery,
    ShakaGraphTeamSessionValidationQueryVariables
  >(ShakaGraphTeamSessionValidationDocument, options);
}
export type ShakaGraphTeamSessionValidationQueryHookResult = ReturnType<
  typeof useShakaGraphTeamSessionValidationQuery
>;
export type ShakaGraphTeamSessionValidationLazyQueryHookResult = ReturnType<
  typeof useShakaGraphTeamSessionValidationLazyQuery
>;
export type ShakaGraphTeamSessionValidationQueryResult = Apollo.QueryResult<
  ShakaGraphTeamSessionValidationQuery,
  ShakaGraphTeamSessionValidationQueryVariables
>;
