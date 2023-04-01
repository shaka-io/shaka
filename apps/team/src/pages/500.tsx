import { ShakaFooter } from "@shaka-team-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-team-components/navigation/ShakaNavigation";
import { useShape } from "@shaka-team-shapes/hooks";
import { ofRootShape } from "@shaka-team-shapes/root/RootShape";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import * as React from "react";
import { configuration } from "../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS },
  },
} = configuration;

const dictionary = [...BASIS];

const ShakaPage500: NextPage = () => {
  const { t } = useTranslation(dictionary);

  const RootShape = useShape(ofRootShape);

  const router = useRouter();

  const lc500 = React.useCallback(() => {
    //
    // @notes:
    router.back();

    // end
    return;
  }, [router]);

  return (
    <>
      <div className={`flex flex-col w-full bg-primary h-screen`}>
        <ShakaNavigation
          basis={{ key: RootShape.basiskey, dictionary, click: lc500 }}
        />

        <div
          className={`flex flex-row w-full items-center justify-center pt-8`}
        >
          <div className={`flex `}>
            <p className={`font-apercu font-medium text-xl text-white `}>
              {`- ${t(`glossary:page_not_found`, `page_not_found`)} -`}
            </p>
          </div>
        </div>
      </div>
      <ShakaFooter basis={{ key: RootShape.basiskey, dictionary }} />
    </>
  );
};

export default ShakaPage500;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
