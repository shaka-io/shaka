import { ShakaFooter } from "@shaka-web-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-web-components/navigation/ShakaNavigation";
import { useShape } from "@shaka-web-shapes/hooks";
import { ofRootShape } from "@shaka-web-shapes/root/RootShape";
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

const ShakaPage404: NextPage = () => {
  const { t } = useTranslation(dictionary);

  const RootShape = useShape(ofRootShape);

  const router = useRouter();

  const lc404 = React.useCallback(() => {
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
          basis={{ key: RootShape.basiskey, dictionary, click: lc404 }}
        />

        <div
          className={`flex flex-row w-full items-center justify-center pt-8`}
        >
          <button type={`button`} onClick={lc404}>
            <p className={`font-apercu font-medium text-3xl text-white `}>
              {`- ${t(`glossary:page_not_found`, `page_not_found`)} -`}
            </p>
          </button>
        </div>
      </div>
      <ShakaFooter basis={{ key: RootShape.basiskey, dictionary }} />
    </>
  );
};

export default ShakaPage404;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, dictionary, CONFIG)),
    },
  };
};
