import { ShakaFooter } from "@shaka-web-components/footer/ShakaFooter";
import { ShakaNavigation } from "@shaka-web-components/navigation/ShakaNavigation";
import { ShakaFundraiseForm } from "@shaka-web-features/fundraise/form/ShakaFundraiseForm";
import { ShakaFundraiseList } from "@shaka-web-features/fundraise/list/ShakaFundraiseList";
import { ofFundraiseShape } from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useShape } from "@shaka-web-shapes/hooks";
import { ofRootShape } from "@shaka-web-shapes/root/RootShape";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesShakaFundraiseOrigin = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseOrigin: React.FC<TypesShakaFundraiseOrigin> = ({
  basis,
}: TypesShakaFundraiseOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const RootShape = useShape(ofRootShape);
  const FundraiseShape = useShape(ofFundraiseShape);

  const router = useRouter();

  const lcShakaFundraiseOriginToHome = React.useCallback(() => {
    //
    // @notes:
    router.back();

    // end
    return;
  }, [router]);

  return (
    <>
      <Head>
        <title>{`SHAKA${!RootShape.networkfound ? ` ... loading` : ``}`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-accent min-h-screen overflow-hidden`}
      >
        <ShakaNavigation
          basis={{
            ...basis,
            bg: `bg-accent`,
            click: lcShakaFundraiseOriginToHome,
          }}
        />

        <div className={`flex flex-col w-full space-y-2 pb-24`}>
          <div
            className={`flex flex-row w-full items-center justify-center space-x-4 pt-4`}
          >
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
            <div className={`flex flex-col md:flex-row md:space-x-4`}>
              <p
                className={`font-apercu font-medium text-3xl text-white font-bold `}
              >
                {`${t(`glossary:lightning`, `lightning`)}`}
              </p>
              <p
                className={`font-apercu font-medium text-3xl text-white font-bold `}
              >
                {`${t(`glossary:crowdfund`, `crowdfund`)}`}
              </p>
            </div>
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
          <div className={`flex flex-col w-full pt-8 px-8 items-center  `}>
            <ShakaFundraiseForm basis={{ ...basis }} />
          </div>
          {FundraiseShape.lnlist.length ? (
            <ShakaFundraiseList basis={{ ...basis }} />
          ) : null}
        </div>
      </div>
      <ShakaFooter basis={{ ...basis, bg: `bg-accent` }} />
    </>
  );
};
