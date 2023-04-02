import { ShakaFundraiseFormAmount } from "@shaka-web-features/fundraise/form/amount/ShakaFundraiseFormAmount";
import { ShakaFundraiseFormFrom } from "@shaka-web-features/fundraise/form/from/ShakaFundraiseFormFrom";
import { ShakaFundraiseFormGenerate } from "@shaka-web-features/fundraise/form/generate/ShakaFundraiseFormGenerate";
import { ShakaFundraiseFormLightningQr } from "@shaka-web-features/fundraise/form/lightning-qr/ShakaFundraiseFormLightningQr";
import { ShakaFundraiseFormMoney } from "@shaka-web-features/fundraise/form/money/ShakaFundraiseFormMoney";
import { ShakaFundraiseFormNote } from "@shaka-web-features/fundraise/form/note/ShakaFundraiseFormNote";
import { ofFundraiseShape } from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesShakaFundraiseForm = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseForm: React.FC<TypesShakaFundraiseForm> = ({
  basis,
}: TypesShakaFundraiseForm) => {
  const { t } = useTranslation(basis.dictionary);

  const FundraiseShape = useShape(ofFundraiseShape);

  return (
    <>
      <div
        className={`flex flex-col rounded min-h-120 w-full md:w-120 py-6 px-4 space-y-3 bg-white opacity-90`}
      >
        <ShakaFundraiseFormAmount basis={{ ...basis }} />
        <ShakaFundraiseFormMoney basis={{ ...basis }} />
        <ShakaFundraiseFormFrom basis={{ ...basis }} />
        <ShakaFundraiseFormNote basis={{ ...basis }} />
        <ShakaFundraiseFormGenerate basis={{ ...basis }} />
        <ShakaFundraiseFormLightningQr basis={{ ...basis }} />
        {!FundraiseShape.lndata || FundraiseShape.lnverifyprevious ? (
          <div className={`flex h-36`}>
            {FundraiseShape.lnverifyprevious ? (
              <div
                className={`flex flex-col w-full items-center justify-center`}
              >
                <div className={`flex text-accent-focus`}>
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    viewBox={"0 0 24 24"}
                    fill={"currentColor"}
                    className={"w-6 h-6"}
                  >
                    <path
                      d={
                        "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                      }
                    />
                  </svg>
                </div>
                <div className={`flex `}>
                  <p
                    className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                  >
                    {`${t(`glossary:thank_you`, `thank_you`)}!`}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`flex flex-col w-full items-center justify-center`}
              >
                <div className={`flex text-accent-focus`}>
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    viewBox={"0 0 24 24"}
                    fill={"currentColor"}
                    className={"w-16 h-16 opacity-20"}
                  >
                    <path
                      fillRule={"evenodd"}
                      d={
                        "M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                      }
                      clipRule={"evenodd"}
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};
