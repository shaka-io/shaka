import { TeamSession } from "@shaka-team-features/session/TeamSession";
import { useLocale } from "@shaka-team-hooks/use-locale";
import { useShakaGraphTeamSessionValidationQuery } from "@shaka-team-library/graph/hooks";
import { useShape } from "@shaka-team-shapes/hooks";
import { ofRootShape } from "@shaka-team-shapes/root/RootShape";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import { configuration } from "../../../configuration";

const {
  I18N: {
    // CONFIG,
    DICTIONARY: { BASIS },
  },
} = configuration;

const dictionary = [...BASIS];

const TeamPagesSession: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  const locale = useLocale();
  const router = useRouter();

  const {
    data: graphTeamSessionValidationd,
    loading: graphTeamSessionValidationl,
    error: graphTeamSessionValidatione,
  } = useShakaGraphTeamSessionValidationQuery({
    variables: {
      figure: {
        locale,
      },
    },
  });

  React.useEffect(() => {
    //
    // @notes:
    if (
      !graphTeamSessionValidationl &&
      !graphTeamSessionValidatione &&
      graphTeamSessionValidationd?.ShakaGraphTeamSessionValidation.pass ===
        false
    ) {
      router.push(`/`);
    }

    // end
    return;
  }, [
    graphTeamSessionValidationd?.ShakaGraphTeamSessionValidation.pass,
    graphTeamSessionValidatione,
    graphTeamSessionValidationl,
    router,
  ]);

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted &&
    !graphTeamSessionValidationl &&
    !graphTeamSessionValidatione &&
    graphTeamSessionValidationd?.ShakaGraphTeamSessionValidation.pass ? (
    <TeamSession basis={{ key: RootShape.basiskey, dictionary }} />
  ) : null;
};

export default TeamPagesSession;

/*
export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
*/
