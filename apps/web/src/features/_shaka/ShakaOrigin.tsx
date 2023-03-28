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

        <div className={`flex flex-col w-full pt-24 space-y-16`}>
          <div className={`group flex flex-row px-8`}>
            <div className={`flex flex-row items-center space-x-4`}>
              <Link href={`/fundraise`}>
                <p
                  className={`font-apercu font-medium text-3xl text-white group-hover:text-opacity-70 `}
                >
                  {`${t(`glossary:join_our_crowdfund`, `join_our_crowdfund`)}`}
                </p>
              </Link>
              <div className={`flex text-white`}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  className={"w-6 h-6"}
                >
                  <path
                    fillRule={"evenodd"}
                    d={
                      "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    }
                    clipRule={"evenodd"}
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={`group flex flex-row px-8 `}>
            <div className={`flex flex-row items-center space-x-4 `}>
              <Link href={`/contact`}>
                <p
                  className={`font-apercu font-medium text-3xl text-white group-hover:text-opacity-70`}
                >
                  {`${t(`glossary:`, `Get in touch`)}`}
                </p>
              </Link>
              <div className={`flex text-white`}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  className={"w-6 h-6"}
                >
                  <path
                    fillRule={"evenodd"}
                    d={
                      "M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                    }
                    clipRule={"evenodd"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShakaFooter basis={{ ...basis }} />
    </>
  );
};
