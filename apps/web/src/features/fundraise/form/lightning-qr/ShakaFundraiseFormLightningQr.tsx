import { ShakaQr } from "@shaka-web-components/qr/ShakaQr";
import { useLocale } from "@shaka-web-hooks/use-locale";
import { useShakaGraphLnInvoiceConfirmMutation } from "@shaka-web-library/graph/hooks";
import {
  initFundraiseShape,
  ofFundraiseShape,
  writeFundraiseShapeLnVerify,
  writeFundraiseShapeLnVerifyAttempts,
  writeFundraiseShapeLnVerifyEntracte,
  writeFundraiseShapeLnVerifyTime,
} from "@shaka-web-shapes/fundraise/FundraiseShape";
import { useFold, useShape } from "@shaka-web-shapes/hooks";
import { TypesShakaBasis } from "@shaka-web-types/basis/TypesShakaBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { useElapsedTime } from "use-elapsed-time";

export type TypesShakaFundraiseFormLightningQr = {
  basis: TypesShakaBasis;
};

export const ShakaFundraiseFormLightningQr: React.FC<
  TypesShakaFundraiseFormLightningQr
> = ({ basis }: TypesShakaFundraiseFormLightningQr) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const FundraiseShape = useShape(ofFundraiseShape);

  console.log(JSON.stringify(FundraiseShape, null, 4), `FundraiseShape`);
  const locale = useLocale();
  const [lnInvoiceConfirm] = useShakaGraphLnInvoiceConfirmMutation();

  const { reset: timereset } = useElapsedTime({
    isPlaying: FundraiseShape.lnverify,
    duration: 3,
    onComplete: () => {
      fold(initFundraiseShape(true));
      fold(writeFundraiseShapeLnVerifyTime());
    },
  });

  const lcaShakaFundraiseFormInvoiceConfirm = React.useCallback(async () => {
    //
    // @notes:

    //
    // conditions

    timereset(0);

    if (!FundraiseShape.lndata || !FundraiseShape.lnhash) {
      return;
    }

    // error false
    // fold()

    // loading start
    fold(writeFundraiseShapeLnVerifyEntracte(true));

    fold(writeFundraiseShapeLnVerify(false));

    //
    // run
    const run = async () => {
      try {
        //
        // start

        const { data } = await lnInvoiceConfirm({
          variables: {
            figure: {
              locale,
              hash: FundraiseShape.lnhash,
            },
          },
        });

        console.log(JSON.stringify(data, null, 4), `data`);

        fold(writeFundraiseShapeLnVerifyAttempts());

        if (
          data?.ShakaGraphLnInvoiceConfirm.pass &&
          data.ShakaGraphLnInvoiceConfirm.data &&
          typeof data.ShakaGraphLnInvoiceConfirm.data.settled === `boolean`
        ) {
          fold(
            writeFundraiseShapeLnVerify(
              data.ShakaGraphLnInvoiceConfirm.data.settled
            )
          );
        }

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        fold(writeFundraiseShapeLnVerifyEntracte(false));
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [
    FundraiseShape.lndata,
    FundraiseShape.lnhash,
    fold,
    lnInvoiceConfirm,
    locale,
    timereset,
  ]);

  return (
    <>
      {FundraiseShape.lndata ? (
        <>
          <div className={`flex flex-col w-full space-y-3`}>
            <div className={`flex flex-col w-full `}>
              <div className={`flex flex-row w-full justify-center`}>
                <p
                  className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                >
                  {`${t(
                    `glossary:lightning_payment_for`,
                    `lightning_payment_for`
                  )}`}
                </p>
              </div>
              <div className={`flex flex-row w-full justify-center pt-3 `}>
                <p
                  className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                >
                  {`${FundraiseShape.moneykind === `btc` ? `₿sat` : `$`} ${
                    FundraiseShape.bundles.InvoiceAmount.letters.length
                      ? FundraiseShape.bundles.InvoiceAmount.letters
                      : `${
                          FundraiseShape.moneykind === `btc` ? `40,000` : `10`
                        }`
                  }`}
                </p>
              </div>
            </div>
            <div className={`flex flex-row w-full justify-center`}>
              <ShakaQr
                basis={{
                  ...basis,
                  data: FundraiseShape.lndata,
                  size: 300,
                  cl: `text-accent-content`,
                }}
              />
            </div>

            <div
              className={`flex flex-row rounded w-full h-12 bg-accent opacity-80 items-center justify-between space-x-3 px-2`}
            >
              <button
                className={`btn btn-sm btn-accent bg-shaka-accent_relief flex-1 font-apercu text-opacity-50 focus:text-white hover:text-white ${
                  FundraiseShape.lnverifyentrace ? `loading` : ``
                }`}
                onClick={lcaShakaFundraiseFormInvoiceConfirm}
              >
                {`${t(`glossary:verify`, `verify`)}`}
              </button>
            </div>

            {FundraiseShape.lnverifyattempts > 0 && !FundraiseShape.lnverify ? (
              <div
                className={`flex flex-row w-full justify-center px-2 space-x-2`}
              >
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  className={"w-6 h-6 text-accent-focus"}
                >
                  <path
                    fillRule={"evenodd"}
                    d={
                      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    }
                    clipRule={"evenodd"}
                  />
                </svg>

                <p
                  className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                >
                  {`${t(
                    `glossary:the_payment_has_not_been_received`,
                    `the_payment_has_not_been_received`
                  )}.`}
                </p>
              </div>
            ) : null}

            {FundraiseShape.lnverifyattempts > 0 && FundraiseShape.lnverify ? (
              <div
                className={`flex flex-row w-full justify-center px-2 space-x-2`}
              >
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  className={"w-6 h-6 text-accent-focus"}
                >
                  <path
                    fillRule={"evenodd"}
                    d={
                      "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    }
                    clipRule={"evenodd"}
                  />
                </svg>

                <p
                  className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                >
                  {`${t(`glossary:thank_you`, `thank_you`)}! ${t(
                    `glossary:we_received_your_payment`,
                    `we_received_your_payment`
                  )}`}
                </p>
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
};
