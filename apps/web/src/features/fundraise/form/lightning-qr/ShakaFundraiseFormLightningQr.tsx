import { ShakaQr } from "@shaka-web-components/qr/ShakaQr";
import { useLocale } from "@shaka-web-hooks/use-locale";
import {
  useShakaGraph0002Mutation,
  useShakaGraphLnInvoiceConfirmMutation,
} from "@shaka-web-library/graph/hooks";
import {
  initFundraiseShapeBundles,
  ofFundraiseShape,
  writeFundraiseShapeLnListAdd,
  writeFundraiseShapeLnVerify,
  writeFundraiseShapeLnVerifyAttemptsInc,
  writeFundraiseShapeLnVerifyAttemptsInit,
  writeFundraiseShapeLnVerifyEntracte,
  writeFundraiseShapeLnVerifyPrevious,
  writeFundraiseShapeLnVerifyTime,
  writeFundraiseShapeToastVisible,
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

  const locale = useLocale();
  const [lnInvoiceConfirm] = useShakaGraphLnInvoiceConfirmMutation();
  const [graph0002] = useShakaGraph0002Mutation();

  const { reset: toastreset } = useElapsedTime({
    isPlaying: FundraiseShape.toastvisible,
    duration: 3,
    onComplete: () => {
      fold(writeFundraiseShapeToastVisible(false));
    },
  });

  const lcaShakaFundraiseFormLightningQrCopyLnUrl =
    React.useCallback(async () => {
      //
      // @notes:

      //
      // conditions

      toastreset(0);

      // error false
      // fold()

      // loading start
      // fold()

      fold(writeFundraiseShapeToastVisible(true));

      //
      // run
      const run = async () => {
        try {
          //
          // start

          await navigator.clipboard.writeText(FundraiseShape.lndata);

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
          // fold()
          //
          // end
        }
      };
      run();

      //
      // end
      return;
    }, [FundraiseShape.lndata, fold, toastreset]);

  const lcaShakaFundraiseFormLightningQrOnPaymentVerified =
    React.useCallback(() => {
      // async
      // @notes:

      //
      // conditions

      // error false
      // fold()

      // loading start
      // fold()

      fold(initFundraiseShapeBundles());
      fold(writeFundraiseShapeLnVerifyPrevious(true));
      fold(writeFundraiseShapeLnVerifyTime());
      fold(writeFundraiseShapeLnVerifyAttemptsInit());

      //
      // run
      const run = async () => {
        try {
          //
          // start

          const { data: graph0002d } = await graph0002({
            variables: {
              figure: {
                locale,
                amount: FundraiseShape.bundles.InvoiceAmount.letters,
                name: FundraiseShape.bundles.InvoiceFrom.letters,
                note: FundraiseShape.bundles.InvoiceNote.letters,
              },
            },
          });

          if (graph0002d?.ShakaGraph0002.pass) {
            fold(
              writeFundraiseShapeLnListAdd({
                key: `${Date.now()}`,
                created: `${Date.now()}`,
                amount: FundraiseShape.bundles.InvoiceAmount.letters,
                name: FundraiseShape.bundles.InvoiceFrom.letters,
                note: FundraiseShape.bundles.InvoiceNote.letters,
              })
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
          // fold()
          //
          // end
        }
      };
      run();

      //
      // end
      return;
    }, [
      FundraiseShape.bundles.InvoiceAmount.letters,
      FundraiseShape.bundles.InvoiceFrom.letters,
      FundraiseShape.bundles.InvoiceNote.letters,
      fold,
      graph0002,
      locale,
    ]);

  const { reset: timereset } = useElapsedTime({
    isPlaying: FundraiseShape.lnverify,
    duration: 3,
    onComplete: lcaShakaFundraiseFormLightningQrOnPaymentVerified,
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

        fold(writeFundraiseShapeLnVerifyAttemptsInc());

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
                  {FundraiseShape.lnamount}
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
              className={`flex flex-row w-full px-8 items-center space-x-2 cursor-pointer`}
              onClick={lcaShakaFundraiseFormLightningQrCopyLnUrl}
            >
              <div className={`flex text-accent-focus opacity-80`}>
                <svg
                  xmlns={"http://www.w3.org/2000/svg"}
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  className={"w-4 h-4"}
                >
                  <path
                    d={
                      "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
                    }
                  />
                </svg>
              </div>

              <p
                className={`font-apercu font-medium text-base text-accent-focus font-bold truncate`}
              >
                {FundraiseShape.lndata}
              </p>
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
                  )}.`}
                </p>
              </div>
            ) : null}
          </div>
        </>
      ) : null}

      {FundraiseShape.toastvisible ? (
        <>
          <div className={"toast toast-center w-96"}>
            <div className={"alert bg-shaka-accent_relief"}>
              <div className={"flex flex-row px-3 space-x-3"}>
                <div className={`flex text-accent-content`}>
                  <svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    viewBox={"0 0 24 24"}
                    fill={"currentColor"}
                    className={"w-4 h-4"}
                  >
                    <path
                      fillRule={"evenodd"}
                      d={
                        "M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                      }
                      clipRule={"evenodd"}
                    />
                    <path
                      fillRule={"evenodd"}
                      d={
                        "M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                      }
                      clipRule={"evenodd"}
                    />
                  </svg>
                </div>
                <p
                  className={`font-apercu font-medium text-base text-accent-focus font-bold `}
                >
                  {`${t(
                    `glossary:lightning_address_copied`,
                    `lightning_address_copied`
                  )}`}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
