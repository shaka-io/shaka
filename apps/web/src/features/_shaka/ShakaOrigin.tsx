import { ShakaFooter } from "@shaka-web-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-web-components/navigation/ShakaNavigation";
import { useShape } from "@shaka-web-shapes/hooks";
import { ofRootShape } from "@shaka-web-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";

export type TypesShakaOrigin = {
  basis: TypesShakaBasis;
};

export const ShakaOrigin: React.FC<TypesShakaOrigin> = ({
  basis,
}: TypesShakaOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const RootShape = useShape(ofRootShape);

  return (
    <>
      <Head>
        <title>{`SHAKA${!RootShape.networkfound ? ` ... loading` : ``}`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-primary min-h-screen overflow-hidden`}
      >
        <ShakaNavigation basis={{ ...basis }} />

        <div className={`flex flex-col w-full space-y-2`}>
          <div className={`flex flex-row px-8 pt-4`}>
            <p className={`font-apercu font-medium text-3xl text-white `}>
              {`${t(`home:primary.one`, `primary.one`)}`}
            </p>
          </div>

          <div className={`flex flex-row px-8 pt-4`}>
            <p className={`font-apercu font-medium text-3xl text-white `}>
              {`${t(`home:primary.two`, `primary.two`)}`}
            </p>
          </div>

          <div className={`flex flex-row px-8 pt-4`}>
            <p className={`font-apercu font-medium text-3xl text-white `}>
              {`${t(`home:primary.three`, `primary.three`)}.`}
            </p>
          </div>
        </div>

        <div className={`flex flex-row px-8 py-16 justify-center`}>
          <Link href={`/fundraise`}>
            <p
              className={`font-apercu font-medium text-3xl text-white hover:text-opacity-70 pointer-cursor`}
            >
              {`${t(`glossary:join_our_crowdfund`, `join_our_crowdfund`)}`}
            </p>
          </Link>
        </div>
      </div>
      <ShakaFooter basis={{ ...basis }} />
    </>
  );
};
