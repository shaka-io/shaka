import { useLocale } from "@shaka-web-hooks/use-locale";
import { ofFundraiseShape } from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { DateTime } from "luxon";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesShakaFundraiseList = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseList: React.FC<TypesShakaFundraiseList> = ({
  basis,
}: TypesShakaFundraiseList) => {
  const { t } = useTranslation(basis.dictionary);

  const router = useRouter();
  const locale = useLocale();

  const FundraiseShape = useShape(ofFundraiseShape);

  return (
    <>
      <div className={`flex flex-col px-8 pt-16 space-y-8`}>
        <div className={`flex flex-row w-full justify-center`}>
          <p
            className={`font-apercu font-medium text-base text-white font-bold `}
          >
            {`- ${t(`glossary:contributions`, `contributions`)} -`}
          </p>
        </div>

        <div className={`flex flex-col w-full space-y-3`}>
          {FundraiseShape.lnlist
            ? FundraiseShape.lnlist.map((lni) => {
                return (
                  <div
                    key={lni.key}
                    className={`flex flex-col w-full bg-shaka-accent_relief py-3 px-2 rounded-xl`}
                  >
                    <div className={`flex flex-col w-full space-y-1`}>
                      <div
                        className={`flex flex-row w-full justify-between px-3 space-x-2`}
                      >
                        <div className={`flex flex-row space-x-2 items-center`}>
                          <svg
                            xmlns={"http://www.w3.org/2000/svg"}
                            viewBox={"0 0 24 24"}
                            fill={"currentColor"}
                            className={"w-4 h-4 text-accent-focus"}
                          >
                            <path
                              fillRule={"evenodd"}
                              d={
                                "M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                              }
                              clipRule={"evenodd"}
                            />
                          </svg>
                          <p
                            className={`font-apercu font-medium text-lg text-accent-focus font-bold text-ellipsis overflow-hidden`}
                          >
                            {`${lni.amount}`}
                          </p>
                        </div>
                        <div className={`flex flex-row items-center`}>
                          <p
                            className={`font-apercu font-medium text-base text-accent-focus font-black `}
                          >
                            {`${DateTime.fromMillis(Number(lni.created))
                              .setLocale(router.locale || locale)
                              .toLocaleString(
                                DateTime.DATE_FULL
                              )}`.toLowerCase()}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex flex-col w-full py-3 px-4 bg-white rounded-lg space-y-3`}
                      >
                        <div className={`flex flex-row `}>
                          <p
                            className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                          >
                            {lni.note
                              ? `${lni.note}`
                              : `* ${t(`glossary:no_note`, `no_note`)} *`}
                          </p>
                        </div>

                        <div className={`flex flex-row w-full justify-end`}>
                          <p
                            className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                          >
                            {`- ${
                              lni.name ||
                              `${t(`glossary:anonymous`, `anonymous`)}`
                            }`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};
