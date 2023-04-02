import { ShakaFundraiseOrigin } from "@shaka-web-features/fundraise/ShakaFundraiseOrigin";
import { useLocale } from "@shaka-web-hooks/use-locale";
import {
  useShakaGraph0000Query,
  useShakaGraph0003Query,
} from "@shaka-web-library/graph/hooks";
import { writeFundraiseShapeLnList } from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import {
  ofRootShape,
  writeRootShapeNetworkFound,
} from "@shaka-web-shapes/root/RootShape";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { configuration } from "../../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS, FUNDRAISE },
  },
} = configuration;

const dictionary = [...BASIS, ...FUNDRAISE];

const ShakaPagesFundraise: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  const fold = useFold();
  const locale = useLocale();

  const {
    data: g0000d,
    loading: g0000l,
    error: g0000e,
  } = useShakaGraph0000Query({
    variables: {
      figure: {
        locale,
      },
    },
  });

  React.useEffect(() => {
    //
    // @notes:
    if (!g0000l && !g0000e && g0000d?.ShakaGraph0000.pass) {
      fold(writeRootShapeNetworkFound(true));
    }

    if (!g0000l && g0000e) {
      fold(writeRootShapeNetworkFound(false));
    }

    // end
    return;
  }, [fold, g0000d?.ShakaGraph0000.pass, g0000e, g0000l]);

  const {
    data: g0003d,
    // loading: g0003l,
    // error: g0003e,
  } = useShakaGraph0003Query({
    variables: {
      figure: {
        locale,
      },
    },
  });

  React.useEffect(() => {
    //
    // @notes:

    if (g0003d?.ShakaGraph0003.data?.list?.length) {
      fold(
        writeFundraiseShapeLnList(
          g0003d.ShakaGraph0003.data.list.map(
            ({ created, key, name, note, amount }) => ({
              created,
              key,
              name,
              note,
              amount,
            })
          )
        )
      );
    }

    // end
    return;
  }, [fold, g0003d?.ShakaGraph0003.data?.list]);

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted ? (
    <ShakaFundraiseOrigin basis={{ key: RootShape.basiskey, dictionary }} />
  ) : null;
};

export default ShakaPagesFundraise;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
