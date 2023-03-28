import { ShakaOrigin } from "@shaka-web-features/_shaka/ShakaOrigin";
import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraph0000Query } from "@shaka-web-library/graph/hooks";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import {
  ofRootShape,
  writeRootShapeNetworkFound,
} from "@shaka-web-shapes/root/RootShape";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { configuration } from "../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS, HOME },
  },
} = configuration;

const dictionary = [...BASIS, ...HOME];

const ShakaPagesIndex: NextPage = () => {
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

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted ? (
    <ShakaOrigin basis={{ key: RootShape.basiskey, dictionary }} />
  ) : null;
};

export default ShakaPagesIndex;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
