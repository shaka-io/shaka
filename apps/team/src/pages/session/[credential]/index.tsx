import { TeamSession } from "@shaka-team-features/session/TeamSession";
import { apollo } from "@shaka-team-library/apollo";
import {
  ShakaGraphTeamSessionHydrateDocument,
  ShakaGraphTeamSessionHydrateQuery,
  ShakaGraphTeamSessionHydrateQueryVariables,
} from "@shaka-team-library/graph/hooks";
import { useShape } from "@shaka-team-shapes/hooks";
import { ofRootShape } from "@shaka-team-shapes/root/RootShape";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { configuration } from "../../../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS },
  },
} = configuration;

const dictionary = [...BASIS];

const TeamPagesSession: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted ? (
    <TeamSession basis={{ key: RootShape.basiskey, dictionary }} />
  ) : null;
};

export default TeamPagesSession;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext) => {
  try {
    if (!params) {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const { credential } = params;

    if (typeof credential !== "string") {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const variables: ShakaGraphTeamSessionHydrateQueryVariables = {
      figure: {
        locale: locale || `en`,
        session: credential,
      },
    };

    const graphresp = await apollo().query<ShakaGraphTeamSessionHydrateQuery>({
      query: ShakaGraphTeamSessionHydrateDocument,
      variables,
    });

    if (!graphresp.data || !graphresp.data.ShakaGraphTeamSessionHydrate.pass) {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const { errors } = graphresp;

    if (errors) {
      return { redirect: { destination: "/", permanent: false }, props: {} };
    }

    const sp = {
      props: {
        ...(await serverSideTranslations(locale || `en`, dictionary, CONFIG)),
      },
    };

    return sp;
  } catch (e) {
    console.log(e);
    return { redirect: { destination: "/", permanent: false }, props: {} };
  }
};
